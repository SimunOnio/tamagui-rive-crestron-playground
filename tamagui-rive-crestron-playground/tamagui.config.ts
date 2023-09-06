import { createFont, createTamagui, createTokens } from "tamagui";
import { shorthands } from "@tamagui/shorthands";
import { createAnimations } from "@tamagui/animations-css";

const animations = createAnimations({
	fast: "ease-in-out 150ms",
	medium: "ease 300ms",
	slow: "cubic-bezier(0.05, 0.5, 1, 0.5) 300ms",
});

const anuphanFont = createFont({
	family: "Anuphan",
	size: {
		1: 13, // s
		2: 14, // m
		3: 15, // l
		4: 16, // xl
		5: 15, // H6
		6: 16, // H5
		7: 17, // H4
		8: 18, // H3
		9: 25, // H2
		10: 50, // H1
		true: 15,
	},
	lineHeight: {
		1: 13, // s
		2: 20, // m
		3: 16, // l
		4: 17, // xl
		5: 16, // H6
		6: 17, // H5
		7: 18, // H4
		8: 19, // H3
		9: 35, // H2
		10: 51, // H1
	},
	weight: {
		1: 400, // s - xl
		5: 700, // H6 - H1
	},
	letterSpacing: {
		1: 0, // H6 - H2
		10: 0.5, // H1
	},
	face: {
		400: { normal: "Anuphan_400Regular" },
		700: { normal: "Anuphan_700Bold" },
	},
});

const size = {
	0: 1,
	0.25: 2,
	0.5: 5,
	0.75: 7,
	1: 10,
	2: 15,
	3: 20,
	4: 25,
	5: 40,
	5.5: 50,
	6: 60,
	7: 70,
	8: 80,
	9: 110,
	9.5: 250,
	10: 300,
	true: "true",
};

export const accentColors = {
	yellow: "#F9DC5C",
	green: "#06D6A0",
	blue: "#3185FC",
	red: "#E40066",
	orange: "#F95738",

	purple: "#A000D2B3", //dont use opacity in hex color
	blue1: " #735CDD",
	blue2: "#45B9EA",
};

export const tokens = createTokens({
	size,
	space: { ...size },
	radius: { 0: 0, 1: 5, 2: 7, 3: 8, 4: 10, 5: 30, 6: 50 },
	zIndex: { 0: 0, 1: 100 },
	// opacity: { 0: 0.35, 1: 0.5, 2: 0.7, 3: 0.75, 4: 0.9 },
	color: {
		//dark
		spaceBlue: "#080B1C",
		spaceBlue2: "#1E132A",

		//light
		spaceLatte: "#F4FAFF",

		//shared
		fusion: "#2b205e", //light text & dark box
		oceanBlue: "#01295F", //light text & dark box
		beige: "#FAF0CA", //dark txt & light box
		lavanda: "#947BD3", //primary
		lavanda50: "#947BD380", //primary

		...accentColors,
	},
});

const config = createTamagui({
	defaultTheme: "dark",
	// shouldAddPrefersColorThemes: false,
	// themeClassNameOnRoot: false,
	size,
	tokens,
	animations,
	fonts: {
		heading: anuphanFont,
		body: anuphanFont,
	},
	themes: {
		light: {
			bgTop: tokens.color.beige,
			contrast: tokens.color.oceanBlue,
			primary: tokens.color.lavanda,
			accent: tokens.color.blue,
			success: tokens.color.green,
			danger: tokens.color.red,
			warning: tokens.color.yellow,

			color: tokens.color.oceanBlue,
			colorHover: tokens.color.blue,
			colorPress: tokens.color.green,
			colorFocus: tokens.color.green,
			link: tokens.color.purple,

			placeholderColor: tokens.color.lavanda50,
			placeholderTextColor: tokens.color.lavanda50,

			background: tokens.color.spaceLatte,
			backgroundHover: tokens.color.blue,
			backgroundPress: tokens.color.green,
			backgroundFocus: tokens.color.yellow,

			borderColor: tokens.color.purple,
			borderColorHover: tokens.color.lavanda,
			borderColorPress: tokens.color.purple,
			borderColorFocus: tokens.color.green,

			shadowColor: tokens.color.lavanda,
			shadowColorHover: tokens.color.blue,
			shadowColorPress: tokens.color.green,
			shadowColorFocus: tokens.color.yellow,
		},

		dark: {
			bgTop: tokens.color.spaceBlue2,
			contrast: tokens.color.spaceLatte,
			primary: tokens.color.lavanda,
			accent: tokens.color.blue,
			success: tokens.color.green,
			danger: tokens.color.red,
			warning: tokens.color.yellow,

			color: tokens.color.spaceLatte,
			colorHover: tokens.color.blue,
			colorPress: tokens.color.green,
			colorFocus: tokens.color.green,
			link: tokens.color.purple,

			placeholderColor: tokens.color.lavanda50,
			placeholderTextColor: tokens.color.lavanda50,

			background: tokens.color.spaceBlue,
			backgroundHover: tokens.color.purple,
			backgroundPress: tokens.color.purple,
			backgroundFocus: tokens.color.purple,

			borderColor: tokens.color.purple,
			borderColorHover: tokens.color.lavanda,
			borderColorPress: tokens.color.purple,
			borderColorFocus: tokens.color.purple,

			shadowColor: tokens.color.lavanda,
			shadowColorHover: tokens.color.blue,
			shadowColorPress: tokens.color.green,
			shadowColorFocus: tokens.color.yellow,
		},
	},
	shorthands,
});

export type AppConfig = typeof config;

declare module "tamagui" {
	interface TamaguiCustomConfig extends AppConfig {}

	interface ThemeValueFallback {
		value: never;
	}
}

export default config;
