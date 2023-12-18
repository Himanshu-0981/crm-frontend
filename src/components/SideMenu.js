import { IoIosArrowForward } from "react-icons/io";

function SideMenu({ icon, title }) {
  return (
    <>
      <main className="flex justify-between items-center border gap-5 px-5 py-3 cursor-pointer text-white bg-color_blue hover:bg-white hover:text-color_blue duration-150 ">
        <section className="flex gap-4 items-center">
          <div>{icon}</div>
          <div className="text-sm">{title}</div>
        </section>
        <section>
          <IoIosArrowForward />
        </section>
      </main>
    </>
  );
}

export default SideMenu;
