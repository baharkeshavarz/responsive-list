interface TableRowProps {
     rowData: any[];
}

 const TableRow = ({ rowData }: TableRowProps) => {
  return (
    <tr>
      {rowData!.map((data, index) => (
        <td key={index}>
          {data[0] === "photo" 
             ? 
               <img 
                   src={require(`../../../assets/images/users/${data[1]}`)}   
                   alt="profile" 
               />
              : data[1]}
         </td>
       ))}
    </tr>
  );
};

export default TableRow;
