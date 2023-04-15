export function activateTheme(theme) {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		// dark mode
		console.log("I am dark mode");
		theme = theme + "Dark";
	}
	document.documentElement.classList = "";
	document.documentElement.classList.add(theme);
	return theme;
}
