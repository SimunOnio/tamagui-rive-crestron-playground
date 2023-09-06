import { useState } from "react";
import config from "../tamagui.config";
import useEruda from "./hooks/useEruda";
import { TamaguiProvider, Theme } from "tamagui";
import Rive from "@rive-app/react-canvas";
import FullscreenWrapper from "./utilities/FullscreenWrapper";
import { Button } from "./utilities/Button";
import SwitchTheme from "./utilities/SwitchTheme";
import HamburgerMenu from "./utilities/HamburgerMenu";

function App() {
	const [theme, setTheme] = useState("dark");

	useEruda();

	return (
		<TamaguiProvider config={config}>
			<Theme name={theme === "dark" ? "dark" : "light"}>
				<FullscreenWrapper>
					<Button p="$6">Gumb</Button>

					<HamburgerMenu />
					<Rive src="https://cdn.rive.app/animations/vehicles.riv" />

					<SwitchTheme theme={theme} setTheme={setTheme} />
				</FullscreenWrapper>
			</Theme>
		</TamaguiProvider>
	);
}

export default App;
