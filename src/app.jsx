import {Route, Routes, BrowserRouter } from 'react-router-dom'
import Portfolio from './pages/portfolio'
import {Header, Footer} from './components'
export function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
