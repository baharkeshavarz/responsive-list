import React from 'react';

interface TableProps {
    children: React.ReactNode;
}

const Table = ({ children }: TableProps) => {
  return (
    <table>
      {children}
    </table>
  );
};

export default Table;