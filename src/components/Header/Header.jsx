import React from "react"
import { NavLink } from "react-router-dom"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import CodeRoundedIcon from "@mui/icons-material/CodeRounded"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import { IoLogoReact } from "react-icons/io5"
import { HeaderStyle } from "./HeaderStyle"
import logotipo from "../../assets/images/logotipo.webp"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { t } = useTranslation()

  return (
    <HeaderStyle>
      <img src={logotipo} alt="logotipo" />
      <nav>
        <ul>
          <li>
            <abbr title="Home">
              <NavLink to="/">
                <span>
                  <HomeOutlinedIcon />
                </span>
              </NavLink>
            </abbr>
          </li>

          <li>
            <abbr title="Projetos">
              <NavLink to="/projetos">
                <span>
                  <CodeRoundedIcon />
                </span>
              </NavLink>
            </abbr>
          </li>

          <li>
            <abbr title="Sobre mim">
              <NavLink to="/perfil">
                <span>
                  <PersonOutlinedIcon />
                </span>
              </NavLink>
            </abbr>
          </li>
        </ul>
      </nav>
      <p>
        {t("powered by")}
        <a href="https://pt-br.reactjs.org/" rel="external" target={"_blank"}>
          ReactJS <IoLogoReact />
        </a>
      </p>
    </HeaderStyle>
  )
}

export default Header
