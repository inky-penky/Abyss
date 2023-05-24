import { useState } from "react";



interface ChildNodeProps {
    value: string;
    onEdit: (value: string) => void;
    onDelete: () => void;
  }
  
  const ChildNode: React.FC<ChildNodeProps> = ({ value, onEdit, onDelete }) => {
    const [isInput, setIsInput] = useState(true);
  
    const handleToggleInput = () => {
      setIsInput(!isInput);
    };
  
    const handleEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
      onEdit(event.target.value);
    };
  
    return (
      <div className="childWrapper">
        <div className="child">
            {isInput ? (
            <input type="text" value={value} onChange={handleEdit} />
            ) : (
            <div className="inputedChild">{value}</div>
            )}
        </div>
        <div className="childButton">
            <button onClick={handleToggleInput}>{isInput ? 'OK' : 'Edit'}</button>
            <button onClick={onDelete} className="deleteButton" >x</button>
        </div>
      </div>
    );
  };


  export default ChildNode