import './App.css';
import './styles/topnav.css';
import './styles/sidenav.css';
import { Topnav } from './components/Topnav';
import { Sidenav } from './components/Sidenav'
import { TrendsGraph } from './components/TrendsGraph';
import { StatsCards } from './components/StatsCards';
import { Orders } from './components/Orders';
import { Platform } from './components/Platform';


function App() {
  return <div className='grid main-container'>
    <Topnav />
    <Sidenav />
    <div className='wrapper grid'>
      <main className='grid gap-20'>
        <TrendsGraph />
        <StatsCards />
        <Orders />
        <Platform />
      </main>
    </div>
  </div>
  {/* <Dashboard /> */}
}

export default App
