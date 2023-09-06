import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tamaguiPlugin } from "@tamagui/vite-plugin";

export default defineConfig({
	build: {
		outDir: "build",
	},
	clearScreen: true,
	define: {
		TAMAGUI_TARGET: JSON.stringify("web"),
	},
	plugins: [
		react(),
		tamaguiPlugin({
			config: "tamagui.config.ts",
			components: ["tamagui"],
		}),
	],
	server: {
		host: true,
	},
	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				global: "globalThis",
			},
		},
	},
	base: "./",
});
