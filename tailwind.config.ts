import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FCD014',
          black: '#0B0B0B',
          gray: '#111111'
        }
      },
      borderRadius: { '2xl': '1rem' }
    }
  },
  plugins: []
}
export default config
