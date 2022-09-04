import Button from "../Button";
import "./AddTodoSection.css";

function AddTodoSection({ todo, onInputChange, onAddTodo }) {
  return (
    <div className="add-todo">
      <input
        value={todo}
        onChange={onInputChange}
        type="text"
        placeholder="write todo"
      />
      <Button className="add-btn" onClick={onAddTodo} title={"Add"} />
    </div>
  );
}

export default AddTodoSection;
