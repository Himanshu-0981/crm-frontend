import { PageTitle } from ".";

function PageHeader({
  title,
  slugTitle1,
  slugTitle2,
  buttonTitle,
  handleButtonClick,
  buttonIcon,
  buttonClassName,
}) {
  return (
    <nav className="flex flex-col gap-2 xs:flex-row  xs:items-center justify-between">
      <section>
        <PageTitle title={title} />
        <div className="flex items-center gap-4 text-[13px] mt-1 text-[#024291] font-normal uppercase">
          <h1>HOME</h1>
          <div className="flex items-center gap-2">
            <h1 className="text-gray-600">/</h1>
            <h1> {slugTitle1}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-gray-600">/</h1>
            <h1 className="text-[#404e67]"> {slugTitle2}</h1>
          </div>
        </div>
      </section>
      <section>
        <button
          className={`${buttonClassName} font-open-sans w-full xs:w-fit rounded-[4px] text-color_blue border border-color_blue  py-2 px-3 flex justify-center items-center gap-2 hover:bg-color_blue hover:text-white duration-150 text-sm `}
          onClick={handleButtonClick}
        >
          {buttonIcon} {buttonTitle}
        </button>
      </section>
    </nav>
  );
}

export default PageHeader;
