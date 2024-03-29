import React from "react"
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiTypescript,
} from "react-icons/si"
import { BsSearch } from "react-icons/bs"
import { ImGit } from "react-icons/im"

import { BarStyle } from "./SkillbarStyle"

const SkillBar = () => {
  return (
    <>
      <h2>Hard Skills</h2>
      <BarStyle>
        <abbr title="React">
          <span>
            <SiReact />
          </span>
        </abbr>

        <abbr title="Typescript">
          <span>
            <SiTypescript />
          </span>
        </abbr>

        <abbr title="Javascript">
          <span>
            <SiJavascript />
          </span>
        </abbr>

        <abbr title="SEO">
          <span>
            <BsSearch />
          </span>
        </abbr>

        <abbr title="Git">
          <span>
            <ImGit />
          </span>
        </abbr>
        <abbr title="HTML">
          <span>
            <SiHtml5 />
          </span>
        </abbr>

        <abbr title="CSS">
          <span>
            <SiCss3 />
          </span>
        </abbr>
      </BarStyle>
      <br />
    </>
  )
}

export default SkillBar
