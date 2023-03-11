import { useState } from 'react'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {

  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <div className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </div>
  )

  return content
}

export default App
