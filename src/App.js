
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoginPage from './auth/login';
import RegisterPage from './auth/register';


function App() {
  return (
       <Router>
        <Routes>
              <Route exact path="/" Component={LoginPage}/>
              <Route path="/register" Component={RegisterPage}/>
              <Route/>
        </Routes>
       </Router>
  );
}

export default App;
