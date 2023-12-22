function Form({
  type = "text",
  placeholder = "placeholder",
  icon,
  className,
  handleChange,
}) {
  return (
    <main className="relative">
      <input
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className={`${className} w-full outline-none border px-8 py-3 text-sm border-gray-300 focus:border-color_blue rounded-md duration-150 mb-1 mt-3 font-open-sans`}
      />
      <section className="absolute top-[27px] left-2 text-gray-500">
        {icon}
      </section>
    </main>
  );
}

export default Form;
