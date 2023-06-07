import { TableHeader } from "./TableHeader";

export default {
  title: "Application Components/Table/Table Header",
  component: TableHeader,
  tags: ["autodocs"],
};

const TableHeaders = (args) => <TableHeader {...args} />;
export const tableHeader = TableHeaders.bind({});
tableHeader.args = {
  helpIcon: "false",
  arrow: "false",
  state: "default",
  text: "Company",
};
