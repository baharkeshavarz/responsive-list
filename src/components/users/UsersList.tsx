import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import UsersTable from './UsersTable';
import { Users } from "../../data"
import Input from '../ui/Input';
import styles from './UsersList.module.css';
import Loader from '../ui/Loader';

const UsersList: React.FC = () => {
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  const [showBox, setShowBox] = useState<boolean>(false);
  const [laoding, setLoading] = useState<boolean>(false);

  const handleBox = () => {
    if (!showBox) {
      // Add setTimeout just to delay and show loading
      setLoading(true);
      setTimeout(() => {
          setShowBox(true)
          setLoading(false);
       } , 1000)
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const terms = inputValue.split(" ");
    setSearchTerms(terms);
  };

  const handleRemoveSearchTerm = (index: number) => {
    const updatedTerms = [...searchTerms];
    updatedTerms.splice(index, 1);
    setSearchTerms(updatedTerms);
  };

  const filterOptions = (option: any) => {
    return searchTerms.length === 0 || searchTerms.some(
      (term) => option.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  const filteredOptions = Users.filter(filterOptions);
  return (
    <>
      <div className={styles.searchContainer}>
        <Input
            type="text"
            placeholder="Search names..."
            value={searchTerms.join(' ')}
            onChange={handleSearch}
            onClick={handleBox}
        />

        {laoding && <Loader/>}

        <div className={styles.searchTermContainer}>
           {searchTerms.filter(Boolean).map((term, index) => (
            <span
               key={index} 
               className={styles.searchTerm}
               >
              <FaTimes onClick={() => handleRemoveSearchTerm(index)} />
              {term}
           </span>
            ))}
        </div>
      </div>
      { showBox && <UsersTable items={filteredOptions}/> }
    </>
  );
};

export default UsersList;
