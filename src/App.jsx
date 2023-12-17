import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard/Dashboard'
import { Users } from './routes/Users/Users'
import { Products } from './routes/Products/Products'
import { ProductForm } from './routes/ProductForm/ProductForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/edit/:id' element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
