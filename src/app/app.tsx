import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="breno-portfolio" element={<Home />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}
