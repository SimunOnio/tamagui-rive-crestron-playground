import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

export default function HamburgerMenu() {
	const { rive, RiveComponent } = useRive({
		src: "./hamburger-time.riv",
		stateMachines: "Basic State Machine",
		autoplay: true,
	});

	if (rive) console.log(rive.contents);

	const handleAnim = useStateMachineInput(rive, "Basic State Machine", "Switch");

	return <RiveComponent onClick={() => handleAnim?.fire()} />;
}
