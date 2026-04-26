import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './pages/Navbar'          // ← pages/ ✅
import Footer from './components/Footer'     // ← components/ ✅
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Success from './pages/Success'
import './App.css'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
        <Footer />
      </>
    </I18nextProvider>
  )
}

export default App