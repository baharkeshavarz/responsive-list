import { User } from '../../types';
import styles from './UsersList.module.css';

interface UsersTableProps {
    items: User[],
    handleSelectOption: (option: any) => void,
}

const UsersTable = ({
     items,
     handleSelectOption
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

<tr>
<td>1</td>
<td>
  <img src={user.photo} alt={user.name}/>
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
