import { useMemo, useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

function Catalog() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')

  // Turunkan daftar tipe dari data, jadi filter otomatis ikut saat data bertambah.
  const types = useMemo(() => ['All', ...new Set(GUNS.map((g) => g.type))], [])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return GUNS.filter((gun) => {
      const byType = type === 'All' || gun.type === type
      if (!byType) return false
      if (!q) return true
      return (
        gun.name.toLowerCase().includes(q) ||
        gun.type.toLowerCase().includes(q) ||
        gun.caliber.toLowerCase().includes(q)
      )
    })
  }, [query, type])

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      <section>
        <div className="controls">
          <input
            type="search"
            className="search"
            placeholder="Search name, type, caliber…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search guns"
          />
          <div className="filters" role="group" aria-label="Filter by type">
            {types.map((t) => (
              <button
                key={t}
                type="button"
                className={type === t ? 'chip active' : 'chip'}
                aria-pressed={type === t}
                onClick={() => setType(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">
            {visible.length} {visible.length === 1 ? 'piece' : 'pieces'}
          </span>
        </div>

        {visible.length > 0 ? (
          <ul className="stock">
            {visible.map((gun) => (
              <GunCard key={gun.name} gun={gun} />
            ))}
          </ul>
        ) : (
          <p className="empty">no guns match</p>
        )}
      </section>
    </>
  )
}

export default Catalog
