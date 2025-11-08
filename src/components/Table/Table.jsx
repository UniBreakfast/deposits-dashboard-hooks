function Table({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Move In Date</th>
          <th>Rent</th>
          <th>Deposit</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>771 Lost Round</td>
          <td>25 February 2020</td>
          <td>3000</td>
          <td>9000</td>
          <td>Awaiting Bank Processing</td>
        </tr> */}
        {
          items.map(item => {
            const { id, property, moveInDate, rent, deposit, status } = item

            return (
              <tr key={id}>
                <td>{property}</td>
                <td>{moveInDate}</td>
                <td>{rent}</td>
                <td>{deposit}</td>
                <td>{status}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table
