import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./services/i18n/index"

import Home from "./pages/Home/Home"
import Perfil from "./pages/Perfil/Perfil"
import Projetos from "./pages/Projetos/Projetos"
// import Login from './pages/Login/Login'

import GlobalStyle from "./GlobalStyle"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
