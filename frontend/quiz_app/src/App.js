import './App.css';
import './sliding_puzzle/puzzleStyling.css'
import RouterComponent from "./Components/RouterComponent"
import NavBar from './Components/Navbar';

function App() {
  return (
    <>
    <div>
      <NavBar/>
      <RouterComponent/>
    </div>
    </>
  );
}

export default App;
