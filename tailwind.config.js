const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      brand: {
        lighter: '#B3C3FF',
        light: '#5B5AFF',
        DEFAULT: '#0336FF',
        hover: '#0022EB',
        dark: '#002F6C',
        black: '#333',
        gray: '#7E839E',
      },
      gray: {
        light: '#E5E5E5',
        DEFAULT: '#B6B4C4',
      },
      red: '#FF0F54',
      yellow: '#FFDE03',
    },
    extend: {
      fontFamily: {
        sans: [
          '"Exo 2"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [],
  // purge: {
  //   // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  //   enabled: !dev,
  //   content: [
  //     `${srcDir}/components/**/*.{vue,js}`,
  //     `${srcDir}/layouts/**/*.vue`,
  //     `${srcDir}/pages/**/*.vue`,
  //     `${srcDir}/plugins/**/*.{js,ts}`,
  //     `${rootDir}/nuxt.config.{js,ts}`,
  //   ],
  // },
}
