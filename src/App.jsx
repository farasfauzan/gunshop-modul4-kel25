import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import InstallButton from './components/InstallButton.jsx'
import Catalog from './pages/Catalog.jsx'
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

// Keranjang disimpan di App supaya badge di header, tombol pada kartu, dan
// halaman Cart membaca state yang sama.
function App() {
  const [tab, setTab] = useState('Catalog')
  const [cart, setCart] = useState([])

  const count = cart.reduce((n, item) => n + item.qty, 0)

  const addToCart = (gun) => {
    setCart((items) => {
      const found = items.some((item) => item.name === gun.name)
      if (!found) return [...items, { name: gun.name, price: gun.price, qty: 1 }]
      return items.map((item) =>
        item.name === gun.name ? { ...item, qty: item.qty + 1 } : item,
      )
    })
  }

  // qty 0 atau kurang berarti barisnya dikeluarkan dari keranjang.
  const setQty = (name, qty) => {
    setCart((items) =>
      qty < 1
        ? items.filter((item) => item.name !== name)
        : items.map((item) => (item.name === name ? { ...item, qty } : item)),
    )
  }

  return (
    <div className="shell">
      <Header tab={tab} onTab={setTab} cartCount={count} />

      <main className="main">
        {tab === 'Catalog' && <Catalog onAdd={addToCart} />}
        {tab === 'Cart' && <Cart items={cart} onQty={setQty} />}
        {tab === 'About' && <About />}
        {tab === 'Contact' && <Contact />}
      </main>

      <InstallButton />
      <Footer />
    </div>
  )
}

export default App
