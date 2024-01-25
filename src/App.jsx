import './App.css';
import './styles/topnav.css';
import './styles/sidenav.css';
import './styles/dashboard-content.css';
import { Topnav } from './components/Topnav';
import { Sidenav } from './components/Sidenav';
import Dashboard from './components/dashboard';


function App() {
  return <div className='grid main-container'>
    <Topnav />
    <Sidenav />
    {/* <Dashboard /> */}
  </div>
}

export default App
