import { YStack } from "tamagui";

export default function FullscreenWrapper({ ...props }) {
	return (
		<YStack fullscreen ai="center" jc="center" p="$4" bg="$background">
			{props.children}
		</YStack>
	);
}
