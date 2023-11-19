import { User } from '../../types';
import styles from './UsersTable.module.css';

interface UsersTableProps {
    items: User[],
}

const UsersTable = ({
     items,
    }: UsersTableProps) => {
  return (
    <div className={styles.container}>
      <table>
          <thead>
                <tr>
                    <th>No.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
          </thead>
          <tbody>
              {items.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <img 
                      src={user.photo}
                      alt={user.name}
                    />
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td><button>View</button></td>
              </tr>
              ))}
          </tbody>
      </table>
    </div>
  )
}

export default UsersTable;
