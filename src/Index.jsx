import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./services/i18n/index"
import { I18nextProvider } from "react-i18next"

import Home from "./pages/Home/Home"
import Perfil from "./pages/Perfil/Perfil"
import Projetos from "./pages/Projetos/Projetos"
import Login from "./pages/Login/Login"

import GlobalStyle from "./GlobalStyle"
import i18n from "./services/i18n/index"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
)
