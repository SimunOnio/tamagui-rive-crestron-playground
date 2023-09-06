import { Button as TamaguiButton, GetProps, styled, variableToString } from "tamagui";
import { tokens } from "../../tamagui.config";

declare module "react-native" {
	interface ViewStyle {
		backgroundImage?: string;
	}
}

export const Button = styled(TamaguiButton, {
	p: "$2",
	br: "$4",
	animation: "medium",

	bw: "$0.25",
	boc: "$red",
	style: {
		background: `linear-gradient(95deg,
			${variableToString(tokens.color.blue)} 1%,
			${variableToString(tokens.color.blue1)} 50%,
			${variableToString(tokens.color.blue2)} 100%)`,
	},
	hoverStyle: { scale: 0.975 },
	pressStyle: { scale: 0.95 },

	variants: {
		switch: {
			bottomLeft: {
				pos: "absolute",
				b: 0,
				l: 0,
				m: "$4",
				boc: "$contrast",
				bg: "$accent",
			},
			password: {
				als: "flex-end",
				p: "$0.75",
				mr: "$0.5",
				mt: "$0.5",
				bw: 0,
				color: "$lavanda50",
				style: {},
				hoverStyle: {
					bw: 0,
					bg: "$background",
					boc: "$background",
				},
				pressStyle: {
					bw: 0,
					bg: "$background",
					boc: "$background",
				},
			},
		},
		link: {
			true: {
				color: "$link",
				bg: "$bgTop",
				style: {},
				hoverStyle: { scale: 1.025, bg: "$background" },
				pressStyle: { scale: 1.025, bg: "$background" },
			},
		},
		size: {
			"...size": (size: any) => {
				return {
					w: size,
					h: size,
				};
			},
		},
		colorVariant: {
			":string": (color: any) => {
				return {
					color,
					borderColor: color,
				};
			},
		},
	} as const,
});

export type ButtonProps = GetProps<typeof TamaguiButton>;
