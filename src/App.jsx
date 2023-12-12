import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard/Dashboard'
import { Users } from './routes/Users/Users'
import { UserDetail } from './routes/UserDetail/UserDetail'
import { Products } from './routes/Products/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetail />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
