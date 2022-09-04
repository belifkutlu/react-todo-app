import Button from "../Button";
import "./TodoItem.css";

function TodoItem({ item, onComplete, onRemove }) {
  return (
    <div className={`todo ${item.completed ? "completed" : ""}`}>
      <span>{item.title}</span>
      <div className="buttons">
        <Button title="Complete" onClick={onComplete} className="check" />
        <Button title="remove" onClick={onRemove} className="delete" />
      </div>
    </div>
  );
}

export default TodoItem;
