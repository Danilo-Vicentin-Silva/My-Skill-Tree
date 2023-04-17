import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop"

const BackOnTop = () => {
	return
	{
		window.screen.height != 0 ? (
			<button>
				<span>
					<VerticalAlignTopIcon />
				</span>
			</button>
		) : (
			<></>
		)
	}
}

export default BackOnTop
