import { prepareUsers } from '../../lib';
import { User } from '../../types';
import Table from '../ui/table/Table';
import TableHeading from '../ui/table/TableHeading';
import TableRow from '../ui/table/TableRow';
import styles from './UsersTable.module.css';

interface UsersTableProps {
    items: User[],
}
const headings = ['No.', 'Image', 'Name', 'Email', 'Username',"birthData"];

const UsersTable = ({
     items,
    }: UsersTableProps) => {
  return (
    <div className={styles.container}>
      <Table>
          <TableHeading headings={headings}/>
          <tbody>
              {items.map((rowData, index) => {
                return (
                         <TableRow
                               key={index}
                               rowData={prepareUsers(rowData)}
                          />
                     )
                 }
              )}
          </tbody>
      </Table>
    </div>
  )
}

export default UsersTable;
