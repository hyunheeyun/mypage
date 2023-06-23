const Button = ({ addListHander, children }) => {
  return (
    <button className="add-button" onClick={addListHander}>
      {children}
    </button>
  );
};

export default Button;
