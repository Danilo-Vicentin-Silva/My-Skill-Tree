import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import Perfil from "./pages/Perfil/Perfil"
import Projetos from "./pages/Projetos/Projetos"

import GlobalStyle from './GlobalStyle'


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyle />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/perfil" element={<Perfil />} />
				<Route path="/projetos" element={<Projetos />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
