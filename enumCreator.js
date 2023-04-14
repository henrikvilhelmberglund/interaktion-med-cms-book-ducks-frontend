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
const colors = ["primary", "secondary"];
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

types.forEach((type) => {
	console.log("[");
	colors.forEach((color) => {
		shades.forEach((shade) => {
			console.log(`"${type}-${color}-${shade}",`);
		});
	});
	console.log("],");
});
