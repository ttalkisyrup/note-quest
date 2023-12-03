import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        eun: {
          yellow: '#FEDB61',
          pink: '#FFA1AD',
          purple: '#C190FF',
          blue: '#9FA9FF',
          green: '#81E4BB',
        },
      },
      boxShadow: {
        card: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Pretendard: ['var(--font-Pretendard)'],
      },
      height: {
        header: '56px',
      },
      keyframes: {
        vibration: {
          from: {
            transform: 'rotate(7deg)',
          },
          to: {
            transform: 'rotate(-7deg)',
          },
        },
      },
      animation: {
        vibration: 'vibration .1s infinite',
      },
    },
  },
  plugins: [],
}
export default config
