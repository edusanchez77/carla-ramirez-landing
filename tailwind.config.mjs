import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': "#8700fc",
				'secondary': "#A6FF02",
				'darkShadow': "#33000000",
				'bg_dark': "#3E4450",
				'bg_secondary': "#FFF0F0FF"
			}
		},
	},
	plugins: [
		animations
	],
}
