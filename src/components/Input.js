function Input({ type, placeholder, handleChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      className={`${className} w-full outline-none text-sm p-3 border-[0.5px] border-gray-400 rounded-md focus:border-blue-700`}
    />
  );
}

export default Input;
