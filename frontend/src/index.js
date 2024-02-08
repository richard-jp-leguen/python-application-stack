import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.js";
import "./styles.scss";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
    </Routes>
  </Router>
);
