import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path="/login" Component={Login}/>
      </Routes>
    </Router>
  )
}

export default App
