import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
