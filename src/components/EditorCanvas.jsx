import { useEffect } from 'react';
import { forwardRef } from 'react';

const EditorCanvas = forwardRef(({ canvas, setCurrentFilter }, ref) => {
    useEffect(() => {
        if (!canvas) return;

        let isDrawing = false;
        let startPoint = null;

        function handleSelection(e) {
            const obj = e.selected?.length === 1 ? e.selected[0] : null;
            const filter = obj?.filters?.at(0);
            setCurrentFilter(filter ? filter.type.toLowerCase() : null);
        }

        canvas.on({
            'selection:created': handleSelection,
            'selection:updated': handleSelection,
            'selection:cleared': handleSelection
        });

        function handleObjectMoving(e) {
            const obj = e.target;
            if (obj) {
                const { left: px, top: py } = obj._originalLeftTop || { left: obj.left, top: obj.top };
                const { left: cx, top: cy } = obj;
                console.log(`Moved from (${px}, ${py}) to (${cx}, ${cy})`);
                console.log(`Movement difference - X: ${(cx - px).toFixed(2)}, Y: ${(cy - py).toFixed(2)}`);
                obj._originalLeftTop = { left: cx, top: cy }; // Update the original position
            }
        }

        canvas.on('object:moving', handleObjectMoving);

        // Handle drawing mode events
        function handleMouseDown(e) {
            if (!canvas.isDrawingMode) return;
            isDrawing = true;
            startPoint = canvas.getPointer(e.e);
            console.log(`Drawing started at (${startPoint.x}, ${startPoint.y})`);            
        }

        function handleMouseMove(e) {
            if (isDrawing && canvas.isDrawingMode) {
                const currentPoint = canvas.getPointer(e.e);
                console.log(`Drawing from (${startPoint.x}, ${startPoint.y}) to (${currentPoint.x}, ${currentPoint.y})`);
            }
        }

        function handleMouseUp(e) {
            if (isDrawing && canvas.isDrawingMode) {
                const endPoint = canvas.getPointer(e.e);
                console.log(`Drawing ended at (${endPoint.x}, ${endPoint.y})`);
                isDrawing = false;
                startPoint = null;
            }
        }

        canvas.on('mouse:down', handleMouseDown);
        canvas.on('mouse:move', handleMouseMove);
        canvas.on('mouse:up', handleMouseUp);

        function handleKeyDown(e) {
            if (e.key === 'Delete') {
                for (const obj of canvas.getActiveObjects()) {                    
                    canvas.remove(obj);
                    canvas.discardActiveObject();
                }
            } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) { // Move
                const activeObjects = canvas.getActiveObjects();
                activeObjects.forEach(obj => {
                    switch (e.key) {
                        case 'ArrowUp':
                            obj.top -= 5;
                            break;
                        case 'ArrowDown':
                            obj.top += 5;
                            break;
                        case 'ArrowLeft':
                            obj.left -= 5;
                            break;
                        case 'ArrowRight':
                            obj.left += 5;
                            break;
                        default:
                            break;
                    }
                    obj.setCoords();
                });
                canvas.renderAll();
            }
        }

        document.addEventListener('keydown', handleKeyDown, false);

        return () => {
            document.removeEventListener('keydown', handleKeyDown, false);
            canvas.off({
                'selection:created': handleSelection,
                'selection:updated': handleSelection,
                'selection:cleared': handleSelection,
                'object:moving': handleObjectMoving,
                'mouse:down': handleMouseDown,
                'mouse:move': handleMouseMove,
                'mouse:up': handleMouseUp
            });
        };

    }, [canvas, setCurrentFilter]);

    return (
        <div className="canvasbox">
            <canvas ref={ref}></canvas>
        </div>
    );
});

export default EditorCanvas;