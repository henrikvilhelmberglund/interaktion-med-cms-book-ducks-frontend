const types = [
	"text",
	"decoration",
	"placeholder",
	"bg",
	"from",
	"via",
	"to",
	"border-x",
	"border-y",
	"border-t",
	"border-r",
	"border-b",
	"border-l",
	"divide",
	"outline",
	"ring",
	"ring-offset",
	"shadow",
	"accent",
	"caret",
	"fill",
	"stroke",
];
const colors = ["primary", "secondary", "base"];
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
let mode = 2;
let myArray = [];

types.forEach((type) => {
	console.log("[");
	colors.forEach((color) => {
		shades.forEach((shade) => {
			if (mode === 1) {
				console.log(`"${type}-${color}-${shade}",`);
			} else if (mode === 2) {
				myArray.push(`${type}-${color}-${shade}`);
			}
		});
	});
	console.log("],");
});

if (mode === 2) {
	console.log(myArray.join(" "));
}
