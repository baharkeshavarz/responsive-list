import React from 'react';
import styles from './UI.module.css';

const Logo: React.FC = () => {
  return (
    <div>
      <img 
          src={require("../../assets/images/logo.png")}   
          alt="Logo" 
          className={styles.logo}
      />
    </div>
  );
};

export default Logo;
