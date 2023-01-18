import { mergeConfig } from "vite"
import { defineConfig } from "vite"
import viteConfig from "./vite.config"

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: "jsdom",
			css: true,
			deps: {
				fallbackCJS: true,
			},
		},
	})
)
