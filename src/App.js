import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Clock from "./component/clock.js";

function App() {
  return (
    <Router basename="/react-ticking-clock-app">
      <Clock />
    </Router>
  );
}

export default App;
