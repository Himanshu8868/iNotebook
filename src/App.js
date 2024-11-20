import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Alert  from './components/Alert';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Singup from './components/Singup';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <NavBar />    {/*NavBar Items */}
        <Alert message="Hello from alert"/>     {/*Export Alert */}
   
        <div className="container">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Singup />} />
        </Routes>
        </div>
      </Router>
      </NoteState>     {/*Notestate is a  useContext api file */}
    </>
  );
}

export default App;
