import { useMemo, useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

const SORTS = [
  { key: 'name', label: 'Name' },
  { key: 'price', label: 'Price' },
]

function Catalog({ onAdd }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')
  const [sort, setSort] = useState({ key: 'name', dir: 'asc' })

  // Turunkan daftar tipe dari data, jadi filter otomatis ikut saat data bertambah.
  const types = useMemo(() => ['All', ...new Set(GUNS.map((g) => g.type))], [])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = GUNS.filter((gun) => {
      const byType = type === 'All' || gun.type === type
      if (!byType) return false
      if (!q) return true
      return (
        gun.name.toLowerCase().includes(q) ||
        gun.type.toLowerCase().includes(q) ||
        gun.caliber.toLowerCase().includes(q)
      )
    })

    const dir = sort.dir === 'asc' ? 1 : -1
    return filtered.sort((a, b) =>
      sort.key === 'price'
        ? (a.price - b.price) * dir
        : a.name.localeCompare(b.name) * dir,
    )
  }, [query, type, sort])

  // Menekan tombol yang sedang aktif membalik arah urutannya.
  const onSort = (key) => {
    setSort((s) => (s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' }))
  }

  const flipDir = () => setSort((s) => ({ ...s, dir: s.dir === 'asc' ? 'desc' : 'asc' }))

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

        <div className="controls sorts">
          <span className="sorts-label">Sort by</span>
          <div className="filters" role="group" aria-label="Sort catalog">
            {SORTS.map((s) => (
              <button
                key={s.key}
                type="button"
                className={sort.key === s.key ? 'chip active' : 'chip'}
                aria-pressed={sort.key === s.key}
                onClick={() => onSort(s.key)}
              >
                {s.label}
              </button>
            ))}
            <button
              type="button"
              className="chip dir"
              onClick={flipDir}
              aria-label={sort.dir === 'asc' ? 'Ascending, click for descending' : 'Descending, click for ascending'}
            >
              {sort.dir === 'asc' ? '↑' : '↓'}
            </button>
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
              <GunCard key={gun.name} gun={gun} onAdd={onAdd} />
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
