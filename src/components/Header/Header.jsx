import { BiLogOut } from "react-icons/bi"
import React from "react"
import { NavLink } from "react-router-dom"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import CodeRoundedIcon from "@mui/icons-material/CodeRounded"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import { IoLogoReact } from "react-icons/io5"
import { HeaderStyle } from "./HeaderStyle"
import { useTranslation } from "react-i18next"
import useLanguage from "../../hooks/useLanguage."
import logotipo from "../../assets/images/logotipo.webp"

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
              <NavLink to="/home" rel="internal">
                <span>
                  <HomeOutlinedIcon />
                </span>
              </NavLink>
            </abbr>
          </li>

          <li>
            <abbr title={t("projetos")}>
              <NavLink to="/projetos" rel="internal">
                <span>
                  <CodeRoundedIcon />
                </span>
              </NavLink>
            </abbr>
          </li>

          <li>
            <abbr title={t("sobreMim1")}>
              <NavLink to="/perfil" rel="internal">
                <span>
                  <PersonOutlinedIcon />
                </span>
              </NavLink>
            </abbr>
          </li>
          <li>
            <abbr title="Logout" rel="prev">
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
