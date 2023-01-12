import React from "react"
import { BsLightbulb } from "react-icons/bs"
import { GiPunchBlast, GiArrowScope } from "react-icons/gi"
import { BiBookAlt } from "react-icons/bi"
import { TbChecklist } from "react-icons/tb"

import { BarStyle } from "./style"

const SkillBar2 = () => {
	return (
		<>
			<h2>Soft Skills</h2>
			<BarStyle>
				<abbr title="Criativo">
                    <BsLightbulb className="icons" size={'4em'}/>
                </abbr>
				<abbr title="Esforçado">
                    <GiPunchBlast className="icons" size={'4em'}/>
                </abbr>
                <abbr title="Focado">
                    <GiArrowScope className="icons" size={'4em'}/>
                </abbr>
				<abbr title="Autodidata">
                    <BiBookAlt className="icons" size={'4em'}/>
                </abbr>
				<abbr title="Organizado">
                    <TbChecklist className="icons" size={'4em'}/>
                </abbr>
            </BarStyle>
            <br />
		</>
	)
}

export default SkillBar2
