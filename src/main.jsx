import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import "./index.css";
import App from "./App.jsx";
import ContextProivder from "./Feature/ContextProivder.jsx";

createRoot(document.getElementById("root")).render(

  <ContextProivder>

    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </ContextProivder>

);
