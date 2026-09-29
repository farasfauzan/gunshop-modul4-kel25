function Cart({ items, onQty }) {
  const count = items.reduce((n, item) => n + item.qty, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <>
      <section className="masthead">
        <h1 className="display">Your cart.</h1>
        <p className="lede">
          Everything you picked, with quantity and line total. Prices are the same as
          the tag on the shelf.
        </p>
      </section>

      <section>
        <div className="list-head">
          <h2>Selected pieces</h2>
          <span className="count">
            {count} {count === 1 ? 'item' : 'items'}
          </span>
        </div>

        {items.length > 0 ? (
          <ul className="cart-list">
            {items.map((item) => (
              <li className="cart-row" key={item.name}>
                <span className="cart-name display">{item.name}</span>
                <span className="type">${item.price.toLocaleString()} each</span>
                <span className="qty">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => onQty(item.name, item.qty - 1)}
                    aria-label={`Remove one ${item.name}`}
                  >
                    &minus;
                  </button>
                  <span className="qty-num">{item.qty}</span>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => onQty(item.name, item.qty + 1)}
                    aria-label={`Add one ${item.name}`}
                  >
                    +
                  </button>
                </span>
                <span className="cart-line price">
                  ${(item.price * item.qty).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty">cart is empty</p>
        )}

        <div className="total">
          <span>Total</span>
          <span className="price">${total.toLocaleString()}</span>
        </div>
      </section>
    </>
  )
}

export default Cart
