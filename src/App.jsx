import { useEffect, useState } from 'react'
import { useFilter } from './hooks/useFilter.js'
import './App.css'
import Table from './components/Table/Table.jsx'

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
