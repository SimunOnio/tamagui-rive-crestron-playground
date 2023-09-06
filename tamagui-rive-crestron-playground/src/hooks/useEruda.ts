import eruda from "eruda";

export default function useEruda() {
	let el = document.createElement("div");
	document.body.appendChild(el);

	eruda.init({
		container: el,
		tool: ["console", "elements"],
		useShadowDom: true,
		autoScale: true,
		defaults: {
			displaySize: 80,
			transparency: 0.9,
			theme: "Monokai Pro",
		},
	});

	console.log("Eruda is running");
}
