import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, Login } from './pages'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={ <Login /> }/>
        <Route path='/Home' element={ <Home /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
