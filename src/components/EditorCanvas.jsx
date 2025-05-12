import { useEffect } from 'react';
import { forwardRef } from 'react';

const EditorCanvas = forwardRef(({ canvas, setCurrentFilter }, ref) => {
    useEffect(() => {
        if (!canvas) return;

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
                'selection:cleared': handleSelection
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