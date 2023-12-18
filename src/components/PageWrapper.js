import { useSideMenuState } from "../contexts/SideMenuState";

function PageWrapper({ children }) {
  const { toggle } = useSideMenuState();

  return (
    <main
      className={`  md:pl-14 duration-150 transition-all lg:ml-52 h-full  p-5`}
    >
      {children}
    </main>
  );
}

export default PageWrapper;
