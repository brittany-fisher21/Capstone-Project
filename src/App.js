import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import HomePage from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Sidebar />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
