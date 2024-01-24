import './App.css';
import './styles/topnav.css';
import './styles/sidenav.css';
import './styles/dashboard-content.css';
import { Topnav } from './components/Topnav';
import { Sidenav } from './components/Sidenav'
import { TrendsGraph } from './components/TrendsGraph';
import { StatsCards } from './components/StatsCards';
import { Orders } from './components/Orders';
import { Platform } from './components/Platform';
import { Sidenav } from './components/Sidenav';
import Dashboard from './components/dashboard';


function App() {
  return <div className='grid main-container'>
    <Topnav />
    <Sidenav />
    <div className='wrapper grid'>
      <div className='grid gap-20'>
        <TrendsGraph />
        <StatsCards />
        <Orders />
        <Platform />
      </div>
    </div>
  </main>
    {/* <Dashboard /> */}
  </div>
}

export default App
