import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import UsersTable from './UsersTable';
import { Users } from "../../data"


const UsersList: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  const [showBox, setShowBox] = useState<boolean>(false);

  const handleBox = () => setShowBox(!showBox)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const terms = inputValue.split(' ');
    setSearchTerms(terms);
  };

  const handleSelectOption = (option: any) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
      setSearchTerms([]); // Clear search terms when an option is selected
    }
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
    <div>
      <div className="input-container">
        {searchTerms.map((term, index) => (
          <span key={index} className="search-term">
            {term}
            <FaTimes onClick={() => handleRemoveSearchTerm(index)} />
          </span>
        ))}

        <input
          type="text"
          placeholder="Search options..."
          value={searchTerms.join(' ')}
          onChange={handleSearch}
          onClick={handleBox}
        />
      </div>
    
      {showBox && 
           <UsersTable
                items={filteredOptions} 
                handleSelectOption={handleSelectOption} 
            />
      }
    </div>
  );
};

export default UsersList;
