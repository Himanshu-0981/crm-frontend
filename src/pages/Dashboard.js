import {
  PageWrapper,
  Calendar,
  Button,
  PageTitle,
  Table,
} from "../components/index";
import { FaFilter } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

function Dashboard() {
  const columns = [
    { key: "sno", title: "Serial Number" },
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    // Add more columns as needed
  ];

  const data = [
    { sno: 1, name: "John Doe", email: "john.doe@example.com" },
    { sno: 2, name: "Jane Doe", email: "jane.doe@example.com" },
    // Add more data rows as needed
  ];

  const actions = [
    {
      key: "edit",
      label: "Edit",
      onClick: (row) => {
        // Handle edit action for the row
        console.log("Edit", row);
      },
    },
    // Add more actions as needed
  ];

  return (
    <PageWrapper>
      <PageTitle title={"DASHBOARD"} />

      <section className="sm:flex justify-between bg-white p-3 mt-5 shadow-md rounded-md">
        <Calendar />
        <div className="flex justify-end mt-2 gap-3">
          <Button
            title="Filter"
            icon={<FaFilter />}
            className="bg-color_blue text-white px-2 py-1 hover:bg-blue-600 duration-150"
          />
          <Button
            title="Reset"
            icon={<GrPowerReset />}
            className="bg-color_blue  text-white px-2 py-1 hover:bg-blue-600 duration-150"
          />
        </div>
      </section>

      <section className="h-96 w-full bg-white rounded-md mt-10 shadow-md">
        <Table
          columns={columns}
          data={data}
          showCheckbox={false}
          actions={actions}
        />
        ;
      </section>
    </PageWrapper>
  );
}

export default Dashboard;
