import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#018C79',
        secondary: '#E9E9E9',
        blue: '#003A71',
        yellow: '#D7DE27',
        red: '#FF0',
        brown: '#7E3908',
        green: '#EAFBF3',
        darkGrey: "#616161",
        purpleButton: "#B3B3B3",
        danger: "#8C0327"
      },
    },
    screens: {
      sm: { max: "1060px" },
      md: { min: "1061px" },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}
export default config
