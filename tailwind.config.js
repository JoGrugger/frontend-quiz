/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: 'a729f5'
				}
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: 'a729f5'
				}
			}
		]
	}
};
