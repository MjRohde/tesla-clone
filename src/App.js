import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Models from './pages/Models/Models';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/models/:model' element={<Models />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
