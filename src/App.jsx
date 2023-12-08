import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard/Dashboard'
import { Users } from './routes/Users/Users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
