import React from "react";
import Header from "./features/components/Header";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/pokemon" />
          <Route path="/skills" />
          <Route path="/works" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
