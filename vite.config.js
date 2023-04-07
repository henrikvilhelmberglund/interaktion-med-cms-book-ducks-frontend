import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetIcons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		UnoCSS({
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
