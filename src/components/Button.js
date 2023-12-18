function Button({ title, handleClick, className, icon }) {
  return (
    <button
      onClick={handleClick}
      className={`${className} flex items-center text-sm gap-2 rounded-sm`}
    >
      {icon}
      {title}
    </button>
  );
}

export default Button;
