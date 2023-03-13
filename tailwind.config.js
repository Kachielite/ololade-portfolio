/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layout/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
				karla: ['Karla', 'sans-serif'],
				satoshi: ['Satoshi', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
