import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import { presetWebFonts } from "unocss";
import presetIcons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		UnoCSS({
			safelist:
				"font-a font-b font-c font-d font-e font-f font-g font-h font-i font-j font-k font-l font-m font-n font-o font-p font-q font-r font-s font-t font-u font-v font-w font-x font-y font-z top-[0%] top-[1%] top-[2%] top-[3%] top-[4%] top-[5%] top-[6%] top-[7%] top-[8%] top-[9%] top-[10%] top-[11%] top-[12%] top-[13%] top-[14%] top-[15%] top-[16%] top-[17%] top-[18%] top-[19%] top-[20%] top-[21%] top-[22%] top-[23%] top-[24%] top-[25%] top-[26%] top-[27%] top-[28%] top-[29%] top-[30%] top-[31%] top-[32%] top-[33%] top-[34%] top-[35%] top-[36%] top-[37%] top-[38%] top-[39%] top-[40%] top-[41%] top-[42%] top-[43%] top-[44%] top-[45%] top-[46%] top-[47%] top-[48%] top-[49%] top-[50%] top-[51%] top-[52%] top-[53%] top-[54%] top-[55%] top-[56%] top-[57%] top-[58%] top-[59%] top-[60%] top-[61%] top-[62%] top-[63%] top-[64%] top-[65%] top-[66%] top-[67%] top-[68%] top-[69%] top-[70%] top-[71%] top-[72%] top-[73%] top-[74%] top-[75%] top-[76%] top-[77%] top-[78%] top-[79%] top-[80%] top-[81%] top-[82%] top-[83%] top-[84%] top-[85%] top-[86%] top-[87%] top-[88%] top-[89%] top-[90%] top-[91%] top-[92%] top-[93%] top-[94%] top-[95%] top-[96%] top-[97%] top-[98%] top-[99%] top-[100%] font-thin font-extralight font-light font-normal font-medium font-semibold font-bold font-extrabold font-black".split(
					" "
				),
			presets: [
				presetUno(),
				presetWebFonts({
					provider: "google", // default provider
					fonts: {
						// these will extend the default theme
						sans: "Roboto",
						mono: ["Fira Code", "Fira Mono:400,700"],
						// custom ones
						lobster: "Lobster",
						lato: [
							{
								name: "Lato",
								weights: ["400", "700"],
								italic: true,
							},
							{
								name: "sans-serif",
								provider: "none",
							},
						],
						a: "Playfair Display",
						b: "Lora",
						c: "Cormorant",
						d: "Merriweather",
						e: "EB Garamond",
						f: "Abril Fatface",
						g: "Roboto Slab",
						h: "Montserrat",
						i: "Bitter",
						j: "Crimson Text",
						k: "Alegreya Sans",
						l: "Asap",
						m: "Domine",
						n: "Fanwood Text",
						o: "Gentium Book Basic",
						p: "Quattrocento Sans",
						q: "Tinos",
						r: "Vollkorn",
					},
				}),
				presetIcons({
					extraProperties: {
						display: "inline-block",
						"vertical-align": "middle",
						// ...
					},
				}),
			],
			mode: "svelte-scoped",
			transformers: [transformerDirectives()],
		}),
		sveltekit(),
	],
});
