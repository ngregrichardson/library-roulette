const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary))',
				secondary: 'hsl(var(--secondary))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				border: 'hsl(var(--border))',
				accent: 'hsl(var(--accent))',
				destructive: 'hsl(var(--destructive))',
				cylinder: 'hsl(var(--cylinder))',
				safe: 'hsl(var(--safe))',
			},
			keyframes: {
				'safe': {
					'0%': {
						transform: 'scale(0)',
						animationTimingFunction: 'ease-out'
					},
					'33%': {
						transform: 'scale(1)'
					},
					'66%': {
						transform: 'scale(1)',
					},
					'100%': {
						transform: 'scale(0)',
						animationTimingFunction: 'ease-in'
					}
				}
			},
			animation: {
				safe: 'safe 0.6s'
			}
		},
		screens: {
			xs: '475px',
			...defaultTheme.screens
		}
	},
	plugins: []
};
