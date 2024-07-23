/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        bg2: 'hsl(var(--bg2))',
        text: 'hsl(var(--text))',
        textgrey: 'hsl(var(--textgrey))',
        accent: 'hsl(var(--accent))',
        cardBG: 'hsl(var(--cardBG))',
        cardBG2: 'hsl(var(--cardBG2))',
        navVercel: 'hsl(var(--navVercel))',
        nav2: 'hsl(var(--nav2))',
        icons: 'hsl(var(--icons))',
      },
      fontFamily: {
        main: 'var(--main)',
      },
    },
  },
  plugins: [],
};
