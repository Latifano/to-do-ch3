import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDoHome from "./pages/ToDoHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoSecondPages from "./pages/ToDoSecondPages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToDoHome />} />
          <Route path="/secondpages" element={<ToDoSecondPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
