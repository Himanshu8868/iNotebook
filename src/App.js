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
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };
  return (
    <>
    <NoteState>
      <Router>
        <NavBar />    {/*NavBar Items */}
        <Alert alert={alert} />   {/*Export Alert */}
   
        <div className="container">
        <Routes>
          <Route exact path="/"  element={<Home  showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About showAlert={showAlert} />} />
          <Route exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/signup" element={<Singup showAlert={showAlert} />} />
        </Routes>
        </div>
      </Router>
      </NoteState>     {/*Notestate is a  useContext api file */}
    </>
  );
}

export default App;
