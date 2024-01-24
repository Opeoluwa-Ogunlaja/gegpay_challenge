import './App.css';
import './styles/topnav.css';
import './styles/sidenav.css';
import { Topnav } from './components/Topnav';
import { Sidenav } from './components/Sidenav'


function App() {
  return <main className='grid'>
    <Topnav />
    <Sidenav />
  </main>
}

export default App
