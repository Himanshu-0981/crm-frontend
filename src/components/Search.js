function Search({
  type = "text",
  placeholder = "placeholder",
  handleChange,
  className = "",
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={`${className} outline-none  w-52 py-1 px-2 text-gray-700 `}
      />
    </>
  );
}

export default Search;
