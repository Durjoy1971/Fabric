import { FabricImage, IText, Circle, Rect } from 'fabric';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Toolbox = ({ canvas, currentFilter, setCurrentFilter }) => {
    const [drawingMode, setDrawingMode] = useState(false);
    const filters = [
        'sepia',
        'vintage',
        'invert',
        'polaroid',
        'grayscale',
        'blackwhite',
        'brownie',
        'kodachrome',
        'technicolor'
    ];

    function clearAll() {
        if (window.confirm('Are you sure you want to clear all?')) {
            canvas.remove(...canvas.getObjects());
        }
    }

    function fileHandler(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = async (e) => {
            const image = await FabricImage.fromURL(e.target.result);
            image.scale(0.5);
            canvas.add(image);
            canvas.centerObject(image);
            canvas.setActiveObject(image);
        };
        reader.readAsDataURL(file);
        e.target.value = '';
    }

    function addText() {
        const text = new IText('Edit this text');
        canvas.add(text);
        canvas.centerObject(text);
        canvas.setActiveObject(text);
    }

    function addCircle() {
        const circle = new Circle({
            radius: 50,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            left: 100,
            top: 100
        });
        canvas.add(circle);
        canvas.centerObject(circle);
        canvas.setActiveObject(circle);
    }

    function addRectangle() {
        const rect = new Rect({
            width: 100,
            height: 100,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            left: 100,
            top: 100
        });
        canvas.add(rect);
        canvas.centerObject(rect);
        canvas.setActiveObject(rect);
    }

    function toggleDrawingMode() {
        canvas.isDrawingMode = !canvas.isDrawingMode;
        setDrawingMode(canvas.isDrawingMode);
    }

    function downloadImage() {
        const link = document.createElement('a');
        link.download = 'photo_editor_image.png';
        link.href = canvas.toDataURL();
        link.click();
    }

    return (
        <div className="toolbox">
            <button title="Add image">
                <FontAwesomeIcon icon="image" />
                <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={fileHandler} />
            </button>
            <button title="Add text" onClick={addText}>
                <FontAwesomeIcon icon="font" />
            </button>
            <button title="Add circle" onClick={addCircle}>
                <FontAwesomeIcon icon="circle" />
            </button>
            <button title="Add rectangle" onClick={addRectangle}>
                <FontAwesomeIcon icon="square" />
            </button>
            <button title="Drawing mode" onClick={toggleDrawingMode} className={drawingMode ? 'active' : ''}>
                <FontAwesomeIcon icon="pencil" />
            </button>
            <button title="Filters"
                onClick={() => setCurrentFilter(currentFilter ? null : filters[0])}
                className={currentFilter ? 'active' : ''}>
                <FontAwesomeIcon icon="filter" />
            </button>
            {currentFilter &&
                <select onChange={(e) => setCurrentFilter(e.target.value)} value={currentFilter}>
                    {filters.map((filter) => (
                        <option key={filter} value={filter}>
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </option>
                    ))}
                </select>
            }
            <button title="Clear all" onClick={clearAll}>
                <FontAwesomeIcon icon="trash" />
            </button>
            <button title="Download as image" onClick={downloadImage}>
                <FontAwesomeIcon icon="download" />
            </button>
        </div>
    );
};

export default Toolbox;