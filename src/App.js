import Home from "./routes/Home"
import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Details from "./routes/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Details />}></Route>
        <Route path="/hello" element={<h1>hello</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
