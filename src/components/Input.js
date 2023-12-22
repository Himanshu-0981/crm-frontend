function Input({ type, placeholder, handleChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      className={`${className} w-full outline-none text-sm p-3`}
    />
  );
}

export default Input;
