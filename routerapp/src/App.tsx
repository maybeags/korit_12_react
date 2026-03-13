import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import ContactSeoul from './components/ContactSeoul'
import ContactBusan from './components/ContactBusan'
import './App.css'
import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>{' | '}
          <Link to='/contact'>Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='contact' element={<Contact />}>
            <Route path='seoul' element={<ContactSeoul />} />
            <Route path='busan' element={<ContactBusan />} />
          </Route>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
