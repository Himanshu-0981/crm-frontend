function PageTitle({ title, className }) {
  return (
    <h1
      className={`${className} font text-[21px] uppercase font-medium text-[#1b2942] -tracking-tighter`}
    >
      {title}
    </h1>
  );
}

export default PageTitle;
