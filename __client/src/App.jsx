import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GeneralContext, { GeneralProvider } from './contexts/GeneralProvider.jsx';
import { useContext } from 'react';

function App() {

  //const {state, dispatch} = useContext(GeneralContext);
  return (
    <GeneralProvider>
      <Router>
          <Navbar/>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path="/login" Component={Login}/>
            </Routes>
          
      </Router>
    </GeneralProvider>
  )
}

export default App
