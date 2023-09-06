import { Meta, StoryObj } from "@storybook/react";
import { Activity } from "@tamagui/lucide-icons";
import { XStack, YStack } from "tamagui";
import { Button } from "../utilities/Button";

export default {
	title: "TamaguiButton",
	component: Button,
} as Meta<typeof Button>;

export const Primary = {
	args: {
		children: "Standard Button",
	},
};

export const Sizes: StoryObj = {
	render: () => (
		<XStack space={"$4"}>
			<Button size={"$2"}>size 2</Button>
			<Button size={"$4"}>size 4</Button>
			<Button size={"$6"}>size 6</Button>
			<Button size={"$8"}>size 8</Button>
			<Button size={"$10"}>size 10</Button>
		</XStack>
	),
};

export const Colors: StoryObj = {
	render: () => (
		<XStack space={"$4"}>
			<Button colorVariant="$blue">primary</Button>
			<Button colorVariant="$blue1">secondary</Button>
			<Button colorVariant="$blue2">success</Button>
			<Button colorVariant="$green">info</Button>
			<Button colorVariant="$lavanda">warning</Button>
			<Button colorVariant="$yellow">error</Button>
		</XStack>
	),
};

export const Icons: StoryObj = {
	render: () => (
		<YStack space={"$4"}>
			<XStack space={"$4"}>
				<Button size={"$2"} icon={<Activity />}>
					size 2
				</Button>
				<Button size={"$4"} icon={<Activity />}>
					size 4
				</Button>
				<Button size={"$6"} icon={<Activity />}>
					size 6
				</Button>
				<Button size={"$8"} icon={<Activity />}>
					size 8
				</Button>
			</XStack>
			<XStack space={"$4"}>
				<Button size={"$2"} iconAfter={<Activity />} colorVariant={"blue"}>
					size 2
				</Button>
				<Button size={"$4"} iconAfter={<Activity />} colorVariant={"yellow"}>
					size 4
				</Button>
				<Button size={"$6"} iconAfter={<Activity />} colorVariant={"green"}>
					size 6
				</Button>
				<Button size={"$8"} iconAfter={<Activity />}>
					size 8
				</Button>
			</XStack>
		</YStack>
	),
};

export const IconButton: StoryObj = {
	render: () => (
		<YStack space={"$4"}>
			<h3>Standard Icon Buttons:</h3>
			<XStack space={"$4"}>
				<Button size={"$2"} icon={<Activity size={"$1"} />} />
				<Button size={"$4"} icon={<Activity size={"$1.5"} />} />
				<Button size={"$6"} icon={<Activity size={"$3"} />} />
				<Button size={"$8"} icon={<Activity size={"$5"} />} />
			</XStack>
			<h3>Circle Icon Buttons:</h3>
			<XStack space={"$4"}>
				<Button size={"$2"} icon={<Activity size={"$1"} />} colorVariant={"blue"} circular />
				<Button size={"$4"} icon={<Activity size={"$1.5"} />} colorVariant={"red"} circular />
				<Button size={"$6"} icon={<Activity size={"$3"} />} colorVariant={"green"} circular />
				<Button size={"$8"} icon={<Activity size={"$4.5"} />} circular />
			</XStack>
		</YStack>
	),
};
