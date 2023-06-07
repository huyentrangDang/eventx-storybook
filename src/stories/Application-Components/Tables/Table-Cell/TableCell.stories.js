import { TableCell } from './TableCell';

export default {
  title: 'Application Components/Table/Table Cell',
  component: TableCell,
  tags: ['autodocs'],
};

const TableCells = (args) => <TableCell {...args} />;
export const tableCell = TableCells.bind({});
tableCell.args = {
  style: 'text',
  supportingText: 'false',
  state: 'disabled',
  text: 'Olivia Rhye',
  textSupport: 'olivia@untitledui.com'
};

