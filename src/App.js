
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoginPage from './auth/login';
import RegisterPage from './auth/register';
import LandingPage from './components/dashboard';
import Courses from './components/courses';
import Analytics from './components/analytics';


function App() {
  return (
       <Router>
        <Routes>
              <Route path='/analytics' Component={Analytics}/>
              <Route path="/courses" Component={Courses}/>
              <Route exact path="/" Component={LoginPage}/>
              <Route path="/register" Component={RegisterPage}/>
              <Route path="/StudentLandingPage" Component={LandingPage}/>
              
        </Routes>
       </Router>
  );
}

export default App;
