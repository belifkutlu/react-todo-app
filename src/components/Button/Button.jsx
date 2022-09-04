import "./Button.css";

function Button({ onClick, title, className }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {title}
    </button>
  );
}

export default Button;
