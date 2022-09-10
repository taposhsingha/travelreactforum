import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeLogout from "./pages/welcomelogout/WelcomeLogout";
import WelcomeLogin from "./pages/welcomelogin/WelcomeLogin";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import TouristSpots from "./pages/touristspots/TouristSpots";
import SingleSpots from "./pages/singlespots/SingleSpots";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomeLogout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/welcomelogin" element={<WelcomeLogin />} />
        <Route path="/welcomelogout" element={<WelcomeLogout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/touristplaces" element={<TouristSpots />} />
        <Route path="/touristplaces/singlespots" element={<SingleSpots />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
