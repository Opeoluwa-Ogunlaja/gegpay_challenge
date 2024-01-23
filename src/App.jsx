import './App.css'
import { Topnav } from './components/Topnav'
import { Sidenav } from './components/sidenav'


function App() {
  return <main className='grid'>
    <Topnav />
    <Sidenav />
  </main>
}

export default App
