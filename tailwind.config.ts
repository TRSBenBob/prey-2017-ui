import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

import scrollbar from 'tailwind-scrollbar'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        alto: '#d2d2d2',
        'dusty-gray': '#999999',
        'cutty-sark': '#799da9',
        bismark: '#457080',
        'cape-cod': '#35393a',
        'ebony-clay': '#212b35',
        'picton-blue': '#33c0ee',
        'rob-roy': '#eeca6a',
        roti: '#c8a954',
        'coffee-bean': '#341213',
        kilamanjaro: '#1c0402',
        woodsmoke: '#090b0a',
      },
      fontFamily: {
        sans: ['URW Gothic', ...fontFamily.sans],
      },
      dropShadow: ({ theme }) => ({
        'coffee-bean': `-0.1875rem 0.0625rem 0 ${theme('colors.coffee-bean')}`,
        roti: `-0.1875rem 0.0625rem 0 ${theme('colors.roti')}`,
      }),
      skew: {
        15: '15deg',
      },
      boxShadow: ({ theme }) => ({
        glow: `
          0 0 .325rem ${theme('colors.picton-blue')},
          0 0 .25rem ${theme('colors.white')}
        `,
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true })],
} satisfies Config
