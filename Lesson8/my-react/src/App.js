import React from "react";
import { BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar";
import './style/App.css';



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    </BrowserRouter>
  )
} 

export default App;
