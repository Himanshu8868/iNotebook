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
import AddNote from './components/AddNote';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <NavBar />    {/*NavBar Items */}
        <Alert message="Hello from alert"/>     {/*Export Alert */}
   
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
      </NoteState>     {/*Notestate is a  useContext api file */}
    </>
  );
}

export default App;
