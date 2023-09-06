import { ReactNode } from "react";
import { Paragraph, TextProps as TTextProps } from "tamagui";

export type SmallTextProps = {
	color: string;
	children: ReactNode;
} & TTextProps;

export default function SmallText({ color, children }: SmallTextProps) {
	return (
		<Paragraph fontSize={14} color={color}>
			{children}
		</Paragraph>
	);
}
