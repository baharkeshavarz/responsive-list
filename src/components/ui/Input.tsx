import styles from './UI.module.css';

import React, { ChangeEvent } from 'react';

interface InputProps {
  label?: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const Input: React.FC<InputProps> = ({
      label,
      type= "text",
      placeholder="",
      value,
      onChange,
      onClick,
      ...props
     }) => {
  return (
    <div>
      {label && <label htmlFor={label}> {label} </label>}
      <input
          type={type}
          id={label} 
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onClick={onClick}
          className={styles.search}
          {...props}
       />
    </div>
  );
};

export default Input;