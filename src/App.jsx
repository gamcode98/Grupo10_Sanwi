import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard/Dashboard'
import { Users } from './routes/Users/Users'
import { Products } from './routes/Products/Products'
import { ProductForm } from './routes/ProductForm/ProductForm'
import { ProductDetail } from './routes/ProductDetail/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/edit/:id' element={<ProductForm />} />
        <Route path='/products/detail/:id' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
