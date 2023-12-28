import { IoMdSearch } from "react-icons/io";
import Button from "./Button";
import { RxReset } from "react-icons/rx";

function Filters({ type = "text", placeholder = "placeholder", handleChange }) {
  return (
    <>
      <form className="flex flex-col sm:flex-row gap-4 justify-between ">
        <section className="flex items-center gap-4">
          <input
            type={type}
            onChange={handleChange}
            className="border border-gray-400 outline-none py-1 px-2 w-full text-sm rounded-md"
            placeholder={placeholder}
          />
        </section>
      </form>
    </>
  );
}

export default Filters;
