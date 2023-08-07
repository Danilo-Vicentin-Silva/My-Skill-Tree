import { BiLogOut } from "react-icons/bi"
import React from "react"
import { NavLink } from "react-router-dom"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import CodeRoundedIcon from "@mui/icons-material/CodeRounded"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import { IoLogoReact } from "react-icons/io5"
import { HeaderStyle } from "./HeaderStyle"
import logotipo from "../../assets/images/logotipo.webp"
import { useTranslation } from "react-i18next"
import useLanguage from "../../hooks/useLanguage."

const Header = () => {
  const { t } = useTranslation()
  useLanguage()

  return (
    <HeaderStyle>
      <img src={logotipo} alt="logotipo" />
      <nav>
        <ul>
          <li>
            <abbr title="Home">
              <NavLink to="/home">
                <span>
                  <HomeOutlinedIcon />
                </span>
              </NavLink>
            </abbr>
          </li>

          <li>
            <abbr title={t("projetos")}>
              <NavLink to="/projetos">
                <span>
                  <CodeRoundedIcon />
                </span>
              </NavLink>
            </abbr>
          </li>

          <li>
            <abbr title={t("sobreMim1")}>
              <NavLink to="/perfil">
                <span>
                  <PersonOutlinedIcon />
                </span>
              </NavLink>
            </abbr>
          </li>
          <li>
            <abbr title="Logout">
              <NavLink to="/">
                <span>
                  <BiLogOut />
                </span>
              </NavLink>
            </abbr>
          </li>
        </ul>
      </nav>
      <p>
        {t("desenvolvidoEm")}
        <a
          href="https://pt-br.react.dev/reference/react"
          rel="nofollow"
          target={"_blank"}
        >
          ReactJS <IoLogoReact />
        </a>
      </p>
    </HeaderStyle>
  )
}

export default Header
