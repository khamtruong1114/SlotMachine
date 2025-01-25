import "./App.css";
import Balance from "./components/Balance";
import Bet from "./components/Bet";
import Reels from "./components/Reels";
import { SpinProvider } from "./context/useSpin";

function App() {
  return (
    <div className="App">
      <header>
        <h1>SLOT MACHINE</h1>
      </header>
      <main>
        <SpinProvider>
          <Reels />
          <Balance />
          <Bet />
        </SpinProvider>
      </main>
      <footer>Build4Fun</footer>
    </div>
  );
}

export default App;
