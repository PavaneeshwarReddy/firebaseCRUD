
import Home from "./Components/Home"
import Login from "./Components/Login"
import AboutUs from "./Components/AboutUs"
import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>

      </Routes>
    </div>
  );
}

export default App;
