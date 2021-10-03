import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from './components/Products'
import Product from './components/Product'
import { products } from './helpers/products'

import './app.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <div className="app-main-inner container">
          <Switch>
            <Route path="/products/:id">
              <Product products={products} />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
