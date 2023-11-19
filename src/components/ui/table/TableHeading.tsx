interface TableHeadingProps {
    headings: string[],
}

const TableHeading = ({ headings }: TableHeadingProps) => {
  return (
    <thead>
      <tr>
        {headings.map((heading, index) => (
          <th key={index}>{heading}</th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeading;
