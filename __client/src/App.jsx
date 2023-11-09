import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/SignUp.jsx';
import GeneralContext, { GeneralProvider } from './contexts/GeneralProvider.jsx';
import { useContext } from 'react';
import Project from './pages/Project.jsx';
import page404 from './pages/404.jsx';
import Loader from './components/Loader.jsx';
import Auth from './middleware/Auth.jsx';

function App() {
  return (
    <GeneralProvider>
      <Router>
          <Auth/>
          <Navbar/>
            <Routes>
              <Route path='/' Component={Home} loader={Loader}/>
              <Route path="/login" Component={Login} loader={Loader}/>
              <Route path="/register" Component={Signup} loader={Loader}/>
              <Route path="/project/:name" Component={Project} loader={Loader}/>
              <Route path='*' Component={page404} loader={Loader}/>
            </Routes>
          <Footer/>
      </Router>
    </GeneralProvider>
  )
}

export default App
