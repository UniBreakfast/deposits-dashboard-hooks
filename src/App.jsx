import { useEffect, useState } from 'react'
import { useFilter } from './hooks/useFilter.js'
import './App.css'
import Table from './components/Table/Table.jsx'
/* 
example data:

[
  {
    "statusType": "active",
    "property": "771 Lost Round",
    "location": "Sacramento CA",
    "moveInDate": "25 February 2020",
    "rent": 3000,
    "deposit": 9000,
    "depositType": "First, Last & Security",
    "status": "Awaiting Bank Processing"
  },
  {
    "statusType": "active",
    "property": "1491 Jagged Arbor",
    "location": "San Antonio TX",
    "moveInDate": "12 March 2020",
    "rent": 2300,
    "deposit": 4600,
    "depositType": "First & Last",
    "status": "Payment Processed"
  },
  {
    "statusType": "closed",
    "property": "1694 Noble Cape",
    "location": "Las Vegas NV",
    "moveInDate": "3 February 2020",
    "rent": 3300,
    "deposit": 6900,
    "depositType": "Complete",
    "status": "Awaiting Bank Processing"
  },
  {
    "statusType": "closed",
    "property": "1141 Tawny Maze",
    "location": "Raleigh NC",
    "moveInDate": "12 January 2020",
    "rent": 2500,
    "deposit": 7500,
    "depositType": "First, Last & Security",
    "status": "Expired: No Payment Received"
  }
]

*/

function App() {
  const [deposits, setDeposits] = useState([])
  const fieldMap = [
    { key: 'property', label: 'Property' },
    { key: 'moveInDate', label: 'Move In Date' },
    { key: 'rent', label: 'Rent' },
    { key: 'deposit', label: 'Deposit' },
    { key: 'status', label: 'Status' },
  ]
  const [activeDeposits, setActiveFilter] = useFilter(
    deposits,
    (deposit, filter) => deposit.statusType === filter
  )
  const [closedDeposits, setClosedFilter] = useFilter(
    deposits,
    (deposit, filter) => deposit.statusType === filter
  )
  
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setDeposits(data))
  }, [])

  useEffect(() => {
    setActiveFilter('active')
    setClosedFilter('closed')
  }, [setActiveFilter, setClosedFilter])
  
  return (
    <>
      <main>
        <h1>Deposits</h1>

        <section>
          <h2>Active Deposits &nbsp;
            <output>{activeDeposits.length}</output>
          </h2>
          <Table items={activeDeposits} columns={fieldMap}/>
        </section>

        <section>
          <h2>Closed Deposits &nbsp;
            <output>{closedDeposits.length}</output>
          </h2>
          <Table items={closedDeposits} columns={fieldMap}/>
        </section>
      </main>
    </>
  )
}

export default App
