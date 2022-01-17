import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/add" element={<AddScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
