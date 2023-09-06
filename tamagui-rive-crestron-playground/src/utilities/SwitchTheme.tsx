import { Button } from "./Button";

interface Props {
	theme: string;
	setTheme: (theme: string) => void;
}

export default function SwitchTheme({ theme, setTheme }: Props) {
	return (
		<Button switch="bottomLeft" onPress={() => setTheme(theme === "dark" ? "light" : "dark")}>
			🌗
		</Button>
	);
}
