import { useRef } from 'react'

function GunCard({ gun, onAdd }) {
  const popup = useRef(null)

  return (
    <li className="card">
      <button className="card-btn" onClick={() => popup.current.showModal()}>
        <img className="card-img" src={gun.image} alt="" width="120" height="90" />
        <span className="name display">{gun.name}</span>
        <span className="type">
          {gun.type} &middot; {gun.caliber}
        </span>
        <span className="price">${gun.price.toLocaleString()}</span>
      </button>

      <button type="button" className="add-btn" onClick={() => onAdd(gun)}>
        Add to cart
      </button>

      <dialog
        className="popup"
        ref={popup}
        onClick={(e) => e.target === popup.current && popup.current.close()}
      >
        <img className="popup-img" src={gun.image} alt="" width="240" height="180" />
        <h3 className="display">{gun.name}</h3>
        <p className="type">
          {gun.type} &middot; {gun.caliber} &middot;{' '}
          <span className="price">${gun.price.toLocaleString()}</span>
        </p>
        <p>{gun.description}</p>
        {gun.credit && (
          <p className="credit">
            Photo:{' '}
            <a href={gun.credit.url} target="_blank" rel="noreferrer">
              {gun.credit.author}
            </a>{' '}
            &middot; {gun.credit.license}
          </p>
        )}
        <form method="dialog">
          <button className="popup-close">Close</button>
        </form>
      </dialog>
    </li>
  )
}

export default GunCard
