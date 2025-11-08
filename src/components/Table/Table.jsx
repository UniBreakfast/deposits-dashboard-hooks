function Table({ items, columns }) {
  const headings = columns.map(
    column => <th key={column.key}>{column.label}</th>
  )
  const rows = items.map(item => {
    return (
      <tr key={item.id}>
        {columns.map(
          column => <td key={column.key}>{item[column.key]}</td>
        )}
      </tr>
    )
  })
  
  return (
    <table>
      <thead>
        <tr>{headings}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default Table
