import './App.css';
import EditorCanvas from './EditorCanvas';
import Toolbox from './Toolbox';
import { useRef, useEffect, useState } from 'react';
import { Canvas, PencilBrush, filters } from 'fabric';

function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);


  useEffect(() => {
    const canvas = new Canvas(canvasRef.current, { backgroundColor: 'white' });
    canvas.setDimensions({ width: window.innerWidth, height: window.innerHeight * 0.9 });

    // Add the brush configuration here
    const brush = new PencilBrush(canvas);
    brush.color = 'black';
    brush.width = 5;
    canvas.freeDrawingBrush = brush;

    setCanvas(canvas);

    return () => canvas.dispose();
  }, [canvasRef, setCanvas]);

  useEffect(() => {
    if (!canvas ||
      !canvas.getActiveObject() ||
      !canvas.getActiveObject().isType('image')) return;

    function getSelectedFilter() {
      switch (currentFilter) {
        case 'sepia':
          return new filters.Sepia();
        case 'vintage':
          return new filters.Vintage();
        case 'invert':
          return new filters.Invert();
        case 'polaroid':
          return new filters.Polaroid();
        case 'grayscale':
          return new filters.Grayscale();
        case 'blackwhite':
          return new filters.BlackWhite();
        case 'brownie':
          return new filters.Brownie();
        case 'kodachrome':
          return new filters.Kodachrome();
        case 'technicolor':
          return new filters.Technicolor();
        default:
          return null;
      }
    }
    const filter = getSelectedFilter();
    const img = canvas.getActiveObject();

    img.filters = filter ? [filter] : [];
    img.applyFilters();
    canvas.renderAll();
  }, [currentFilter, canvas]);

  return (
    <div className="editor">
      <Toolbox
        canvas={canvas}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <EditorCanvas
        ref={canvasRef}
        canvas={canvas}
        setCurrentFilter={setCurrentFilter}
      />
    </div>
  );
}

export default App;