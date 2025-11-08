function Table({ items, columns }) {
  const rows = items.map(item => {
    return (
      <tr key={item.id}>
        {columns.map(
          column => <td key={column.key}>{item[column.key]}</td>
        )}
      </tr>
    )
  })
  const headings = columns.map(
    column => <th key={column.key}>{column.label}</th>
  )
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
