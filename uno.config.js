import { defineConfig } from "vite";
import presetUno from "@unocss/preset-uno";
import { presetWebFonts } from "unocss";
import presetIcons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";
import presetTheme from "unocss-preset-theme";
import { colors } from "@unocss/preset-mini";

export default defineConfig({
	shortcuts: {
		btn: "bg-blue-500 hover:bg-blue-400 p-2 rounded-lg shadow-md",
		"star-hover": "hover:(stroke-1 stroke-black fill-orange-500)",
		"btn-blue-primary": "bg-primary-500 hover:bg-primary-400 p-2 rounded-full shadow-md",
		"btn-bluedark-primary": "bg-primary-500 hover:bg-primary-400 p-2 rounded-full shadow-md",
		"btn-yellow-primary": "bg-primary-500 hover:bg-primary-400 p-8 rounded shadow-md",
		"btn-yellowdark-primary": "bg-primary-500 hover:bg-primary-400 p-8 rounded shadow-md",
	},
	safelist:
		`font-a font-b font-c font-d font-e font-f font-g font-h font-i font-j font-k font-l font-m font-n font-o font-p font-q font-r font-s font-t font-u font-v font-w font-x font-y font-z 
    top-[0%] top-[1%] top-[2%] top-[3%] top-[4%] top-[5%] top-[6%] top-[7%] top-[8%] top-[9%] top-[10%] 
    top-[11%] top-[12%] top-[13%] top-[14%] top-[15%] top-[16%] top-[17%] top-[18%] top-[19%] top-[20%] 
    top-[21%] top-[22%] top-[23%] top-[24%] top-[25%] top-[26%] top-[27%] top-[28%] top-[29%] top-[30%] 
    top-[31%] top-[32%] top-[33%] top-[34%] top-[35%] top-[36%] top-[37%] top-[38%] top-[39%] top-[40%] 
    top-[41%] top-[42%] top-[43%] top-[44%] top-[45%] top-[46%] top-[47%] top-[48%] top-[49%] top-[50%] 
    top-[51%] top-[52%] top-[53%] top-[54%] top-[55%] top-[56%] top-[57%] top-[58%] top-[59%] top-[60%] 
    top-[61%] top-[62%] top-[63%] top-[64%] top-[65%] top-[66%] top-[67%] top-[68%] top-[69%] top-[70%] 
    top-[71%] top-[72%] top-[73%] top-[74%] top-[75%] top-[76%] top-[77%] top-[78%] top-[79%] top-[80%] 
    top-[81%] top-[82%] top-[83%] top-[84%] top-[85%] top-[86%] top-[87%] top-[88%] top-[89%] top-[90%] 
    top-[91%] top-[92%] top-[93%] top-[94%] top-[95%] top-[96%] top-[97%] top-[98%] top-[99%] top-[100%]
    font-thin font-extralight font-light font-normal font-medium font-semibold font-bold font-extrabold font-black
    text-primary-50 text-primary-100 text-primary-200 text-primary-300 text-primary-400 text-primary-500 text-primary-600 text-primary-700 text-primary-800 text-primary-900
    text-secondary-50 text-secondary-100 text-secondary-200 text-secondary-300 text-secondary-400 text-secondary-500 text-secondary-600 text-secondary-700 text-secondary-800 text-secondary-900
    text-base-50 text-base-100 text-base-200 text-base-300 text-base-400 text-base-500 text-base-600 text-base-700 text-base-800 text-base-900
    bg-primary-50 bg-primary-100 bg-primary-200 bg-primary-300 bg-primary-400 bg-primary-500 bg-primary-600 bg-primary-700 bg-primary-800 bg-primary-900
    bg-secondary-50 bg-secondary-100 bg-secondary-200 bg-secondary-300 bg-secondary-400 bg-secondary-500 bg-secondary-600 bg-secondary-700 bg-secondary-800 bg-secondary-900
    bg-base-50 bg-base-100 bg-base-200 bg-base-300 bg-base-400 bg-base-500 bg-base-600 bg-base-700 bg-base-800 bg-base-900
    btn-blue-primary btn-bluedark-primary btn-yellow-primary btn-yellowdark-primary
    btn-blue-secondary btn-bluedark-secondary btn-yellow-secondary btn-yellowdark-secondary`.split(
			" "
		),
	theme: {},
	presets: [
		presetUno(),
		presetTheme({
			theme: {
				blue: {
					colors: {
						base: {
							50: colors.dark["900"],
							100: colors.dark["700"],
							200: colors.dark["500"],
							300: colors.dark["200"],
							400: colors.dark["50"],
							500: colors.light["900"],
							600: colors.light["700"],
							700: colors.light["500"],
							800: colors.light["200"],
							900: colors.light["50"],
						},
						primary: {
							50: colors.blue["50"],
							100: colors.blue["100"],
							200: colors.blue["200"],
							300: colors.blue["300"],
							400: colors.blue["400"],
							500: colors.blue["500"],
							600: colors.blue["600"],
							700: colors.blue["700"],
							800: colors.blue["800"],
							900: colors.blue["900"],
						},
						secondary: {
							50: colors.purple["50"],
							100: colors.purple["100"],
							200: colors.purple["200"],
							300: colors.purple["300"],
							400: colors.purple["400"],
							500: colors.purple["500"],
							600: colors.purple["600"],
							700: colors.purple["700"],
							800: colors.purple["800"],
							900: colors.purple["900"],
						},
						gray: {
							50: colors.slate["50"],
							100: colors.slate["100"],
							200: colors.slate["200"],
							300: colors.slate["300"],
							400: colors.slate["400"],
							500: colors.slate["500"],
							600: colors.slate["600"],
							700: colors.slate["700"],
							800: colors.slate["800"],
							900: colors.slate["900"],
						},
					},
				},
				blueDark: {
					colors: {
						base: {
							50: colors.light["50"],
							100: colors.light["200"],
							200: colors.light["500"],
							300: colors.light["700"],
							400: colors.light["900"],
							500: colors.dark["50"],
							600: colors.dark["200"],
							700: colors.dark["500"],
							800: colors.dark["700"],
							900: colors.dark["900"],
						},
						primary: {
							50: colors.blue["50"],
							100: colors.blue["100"],
							200: colors.blue["200"],
							300: colors.blue["300"],
							400: colors.blue["400"],
							500: colors.blue["500"],
							600: colors.blue["600"],
							700: colors.blue["700"],
							800: colors.blue["800"],
							900: colors.blue["900"],
						},
						secondary: {
							50: colors.purple["50"],
							100: colors.purple["100"],
							200: colors.purple["200"],
							300: colors.purple["300"],
							400: colors.purple["400"],
							500: colors.purple["500"],
							600: colors.purple["600"],
							700: colors.purple["700"],
							800: colors.purple["800"],
							900: colors.purple["900"],
						},
						gray: {
							50: colors.slate["50"],
							100: colors.slate["100"],
							200: colors.slate["200"],
							300: colors.slate["300"],
							400: colors.slate["400"],
							500: colors.slate["500"],
							600: colors.slate["600"],
							700: colors.slate["700"],
							800: colors.slate["800"],
							900: colors.slate["900"],
						},
					},
				},
				yellow: {
					colors: {
						base: {
							50: colors.dark["900"],
							100: colors.dark["700"],
							200: colors.dark["500"],
							300: colors.dark["200"],
							400: colors.dark["50"],
							500: colors.light["900"],
							600: colors.light["700"],
							700: colors.light["500"],
							800: colors.light["200"],
							900: colors.light["50"],
						},
						primary: {
							50: colors.yellow["50"],
							100: colors.yellow["100"],
							200: colors.yellow["200"],
							300: colors.yellow["300"],
							400: colors.yellow["400"],
							500: colors.yellow["500"],
							600: colors.yellow["600"],
							700: colors.yellow["700"],
							800: colors.yellow["800"],
							900: colors.yellow["900"],
						},
						secondary: {
							50: colors.rose["50"],
							100: colors.rose["100"],
							200: colors.rose["200"],
							300: colors.rose["300"],
							400: colors.rose["400"],
							500: colors.rose["500"],
							600: colors.rose["600"],
							700: colors.rose["700"],
							800: colors.rose["800"],
							900: colors.rose["900"],
						},
						gray: {
							50: colors.gray["50"],
							100: colors.gray["100"],
							200: colors.gray["200"],
							300: colors.gray["300"],
							400: colors.gray["400"],
							500: colors.gray["500"],
							600: colors.gray["600"],
							700: colors.gray["700"],
							800: colors.gray["800"],
							900: colors.gray["900"],
						},
					},
				},
				yellowDark: {
					colors: {
						base: {
							50: colors.light["50"],
							100: colors.light["200"],
							200: colors.light["500"],
							300: colors.light["700"],
							400: colors.light["900"],
							500: colors.dark["50"],
							600: colors.dark["200"],
							700: colors.dark["500"],
							800: colors.dark["700"],
							900: colors.dark["900"],
						},
						primary: {
							50: colors.yellow["50"],
							100: colors.yellow["100"],
							200: colors.yellow["200"],
							300: colors.yellow["300"],
							400: colors.yellow["400"],
							500: colors.yellow["500"],
							600: colors.yellow["600"],
							700: colors.yellow["700"],
							800: colors.yellow["800"],
							900: colors.yellow["900"],
						},
						secondary: {
							50: colors.rose["50"],
							100: colors.rose["100"],
							200: colors.rose["200"],
							300: colors.rose["300"],
							400: colors.rose["400"],
							500: colors.rose["500"],
							600: colors.rose["600"],
							700: colors.rose["700"],
							800: colors.rose["800"],
							900: colors.rose["900"],
						},
						gray: {
							50: colors.gray["50"],
							100: colors.gray["100"],
							200: colors.gray["200"],
							300: colors.gray["300"],
							400: colors.gray["400"],
							500: colors.gray["500"],
							600: colors.gray["600"],
							700: colors.gray["700"],
							800: colors.gray["800"],
							900: colors.gray["900"],
						},
					},
				},
			},
		}),
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
	transformers: [transformerDirectives()],
});
