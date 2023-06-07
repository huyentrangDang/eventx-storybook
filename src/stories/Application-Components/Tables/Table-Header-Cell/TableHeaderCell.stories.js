import { TableHeaderCell } from "./TableHeaderCell";

export default {
  title: "Application Components/Table/Table Header Cell",
  component: TableHeaderCell,
  tags: ["autodocs"],
};

const TableHeaderCells = (args) => <TableHeaderCell {...args} />;
export const tableHeaderCell = TableHeaderCells.bind({});
tableHeaderCell.args = {
    text: "true",
    checkbox: "true",
    color: "white",
};
