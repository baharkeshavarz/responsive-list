import { Item } from '../../types';
import styles from './UsersList.module.css';

interface UsersTableProps {
    items: Item[],
    handleSelectOption: (option: any) => void,
}

const UsersTable = ({
     items,
     handleSelectOption
    }: UsersTableProps) => {
  return (
    <div className={styles.container}>

<p>Selected Options:</p>
   <ul>
        {items.map((option) => (
          <li key={option.id} onClick={() => handleSelectOption(option)}>
            {option.label}
          </li>
        ))}
      </ul>


    </div>
  )
}

export default UsersTable;
