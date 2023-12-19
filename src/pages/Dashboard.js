import { PageWrapper, Calendar, Button, PageTitle } from "../components/index";
import { FaFilter } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

function Dashboard() {
  return (
    <PageWrapper>
      <PageTitle title={"DASHBOARD"} />

      <section className="sm:flex justify-between bg-white p-3 mt-5 shadow-md rounded-md">
        <Calendar />
        <div className="flex justify-end mt-2 gap-3">
          <Button
            title="Filter"
            icon={<FaFilter />}
            className="bg-color_blue text-white px-2 py-1 hover:bg-blue-700"
          />
          <Button
            title="Reset"
            icon={<GrPowerReset />}
            className="bg-color_blue text-white px-2 py-1 hover:bg-blue-700"
          />
        </div>
      </section>

      <section className="h-96 w-full bg-white rounded-md mt-10 shadow-md"></section>
    </PageWrapper>
  );
}

export default Dashboard;
