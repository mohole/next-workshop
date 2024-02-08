export const Item = ({ id, text, done, onDelete, onUpdate }) => {
  return (
    <span className={done ? "done" : ""}>
      <input
        type="checkbox"
        id={id}
        checked={done}
        onChange={() => onUpdate(id, done)}
      />
      <label>{text}</label>

      <button onClick={() => onDelete(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </button>
    </span>
  );
};
