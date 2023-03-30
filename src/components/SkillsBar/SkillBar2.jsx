import React from "react"
import StorefrontIcon from "@mui/icons-material/Storefront"
import { BsLightbulb } from "react-icons/bs"
import { GiPunchBlast, GiArrowScope } from "react-icons/gi"
import { BiBookAlt } from "react-icons/bi"
import { TbChecklist } from "react-icons/tb"
import { BarStyle } from './SkillbarStyle'

const SkillBar2 = () => {
	return (
		<>
			<h2>Soft Skills</h2>
			<BarStyle>
				<abbr title="Marketing Digital">
					<span>
						<StorefrontIcon />
					</span>
				</abbr>
				<abbr title="Criativo">
					<span>
						<BsLightbulb />
					</span>
				</abbr>
				<abbr title="Esforçado">
					<span>
						<GiPunchBlast />
					</span>
				</abbr>
				<abbr title="Focado">
					<span>
						<GiArrowScope />
					</span>
				</abbr>
				<abbr title="Autodidata">
					<span>
						<BiBookAlt />
					</span>
				</abbr>
				<abbr title="Organizado">
					<span>
						<TbChecklist />
					</span>
				</abbr>
			</BarStyle>
			<br />
		</>
	)
}

export default SkillBar2
