function Button({ title, handleClick, className, icon }) {
  return (
    <button
      onClick={handleClick}
      className={`${className} flex items-center justify-center text-sm gap-2 rounded-sm py-2 px-4 text-white font-medium shadow-md`}
    >
      {icon}
      {title}
    </button>
  );
}

export default Button;
