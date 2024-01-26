import "./App.css";
import "./styles/topnav.css";
import "./styles/sidenav.css";
import { Topnav } from "./components/Topnav";
import { Sidenav } from "./components/Sidenav";
import { TrendsGraph } from "./components/TrendsGraph";
import { StatsCards } from "./components/StatsCards";
import { Orders } from "./components/Orders";
import { Platform } from "./components/Platform";
import { useTheme } from "./contexts/ThemeProvider";
import { useEffect } from "react";

function App() {
  const themeArr = useTheme()
  useEffect(() => {
    const theme = themeArr[0]
    if (theme == 'light') {
      document.body.classList.toggle('dark', false)
    }
    else{
      document.body.classList.toggle('dark',true)
    }
  },[themeArr])

  return (
      <div className="grid main-container">
        <Topnav />
        <Sidenav />
        <div className="wrapper grid">
          <main className="grid gap-lg">
            <TrendsGraph />
            <StatsCards />
            <Orders />
            <Platform />
          </main>
        </div>
      </div>
  );
}

export default App;
