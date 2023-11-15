/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js'

export default {
	content: [
		'./public/**/*.astro',        
		'./src/**/*.{astro,js,jsx,ts,tsx,vue}',        
		'node_modules/preline/dist/*.js',
	],
	theme: {
		colors: {
			'blue': '#5383E8',
			'purple': '#7e5bef',
			'pink': '#ff49db',
			'orange': '#ff7849',
			'green': '#13ce66',
			'red': '#E84057',
			'gray-dark': '#DBE0E4',
			'gray': '#ebeef1',
			'gray-light': '#F7F7F9',
		},
	  },
	plugins: [preline],
}
