/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#E6F6F6',
          100: '#CCF0F0',
          200: '#99E0E0',
          300: '#66D0D0',
          400: '#33C0C0',
          500: '#1A9C9C',
          600: '#158A8A',
          700: '#106767',
          800: '#0A4444',
          900: '#052222',
        },
        coral: {
          50: '#FFEDED',
          100: '#FFDADA',
          200: '#FFB6B6',
          300: '#FF9191',
          400: '#FF6D6D',
          500: '#FF6B6B',
          600: '#CC5555',
          700: '#993F3F',
          800: '#662A2A',
          900: '#331515',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
