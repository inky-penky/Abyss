import { useState, useRef } from "react";
import ChildNode from "../components/Childnode"



const ParentNode: React.FC = () => {
    const [children, setChildren] = useState<string[]>([]);
    const canvasRef = useRef<HTMLDivElement>(null);
    const parentNodeRef = useRef<HTMLDivElement>(null);
    const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  
    const handleAddChild = () => {
      setChildren([...children, '']);
      centerParentNode();
    };
  
    const handleEditChild = (index: number, value: string) => {
      const updatedChildren = [...children];
      updatedChildren[index] = value;
      setChildren(updatedChildren);
    };
  
    const handleDeleteChild = (index: number) => {
      const updatedChildren = [...children];
      updatedChildren.splice(index, 1);
      setChildren(updatedChildren);
    };

    const centerParentNode = () => {
        const canvas = canvasRef.current;
        const parentNode = parentNodeRef.current;
    
        if (canvas && parentNode) {
          const canvasRect = canvas.getBoundingClientRect();
          const parentNodeRect = parentNode.getBoundingClientRect();
    
          const offsetX = canvasRect.width / 2 - parentNodeRect.width / 2;
          const offsetY = canvasRect.height / 2 - parentNodeRect.height / 2;
    
          setCanvasOffset({ x: offsetX, y: offsetY });
        }
      };


      const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        const parentNode = parentNodeRef.current;
    
        if (parentNode) {
          const parentNodeRect = parentNode.getBoundingClientRect();
    
          const offsetX = event.clientX - parentNodeRect.left;
          const offsetY = event.clientY - parentNodeRect.top;
    
          event.dataTransfer.setData('text/plain', ''); // Required for dragging in Firefox
    
          setCanvasOffset({ x: offsetX, y: offsetY });
        }
      };


      const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
      };
    
      const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const canvas = canvasRef.current;
        const parentNode = parentNodeRef.current;
    
        if (canvas && parentNode) {
          const offsetX = event.clientX - canvas.offsetLeft - canvasOffset.x;
          const offsetY = event.clientY - canvas.offsetTop - canvasOffset.y;
    
          setCanvasOffset({ x: offsetX, y: offsetY });
        }
      };
      
  
    return (
      <div className="parentChildWrapper" ref={canvasRef} onDragOver={handleDragOver} onDrop={handleDrop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        userSelect: 'none',
        cursor: 'move'
      }}
      >
        <div className="parent_div" ref={parentNodeRef} draggable onDragStart={handleDragStart}
        style={{
          position: 'absolute',
          left: `${canvasOffset.x}px`,
          top: `${canvasOffset.y}px`,
          padding: '8px',
          cursor: 'move',
        }}
        >
            <span className="parent">Categories</span>
            <button onClick={handleAddChild} className="addChild">+</button>
        </div>
        <div className="childRender">
            {children.map((child, index) => (
            <ChildNode
                key={index}
                value={child}
                onEdit={(value:any) => handleEditChild(index, value)}
                onDelete={() => handleDeleteChild(index)}
            />
            ))}
        </div>
      </div>
    );
  };



  export default ParentNode