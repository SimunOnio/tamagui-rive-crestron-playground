import type { Preview } from "@storybook/react";

const preview: Preview = {
	globalTypes: {
		theme: {
			name: "Theme",
			title: "Theme",
			description: "Theme for your components",
			defaultValue: "dark",
			toolbar: {
				icon: "paintbrush",
				dynamicTitle: true,
				items: [
					{ value: "dark", left: "🌙", title: "Dark Mode" },
					{ value: "light", left: "☀️", title: "Light Mode" },
				],
			},
		},
	},
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
