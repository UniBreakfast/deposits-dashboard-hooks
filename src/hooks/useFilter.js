import {useState, useMemo} from 'react'

function useFilter(items, predicate) {
  const [filter, setFilter] = useState(null)

  const filteredItems = useMemo(() => {
    if (!filter) return items

    return items.filter(i => predicate(i, filter))
  }, [items, filter, predicate])

  return [filteredItems, setFilter]
}

export {useFilter}
