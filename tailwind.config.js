/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['"Courier Prime"', 'monospace'],
      },
      animation: {
        bounce: 'bounce 1s infinite',
        twinkle: 'twinkle 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Courier Prime',
            src: 'url("../public/CourierPrime-Regular.ttf") format("truetype")',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'Courier Prime',
            src: 'url("../public/CourierPrime-Bold.ttf") format("truetype")',
            fontWeight: 'bold',
            fontStyle: 'normal',
          }
        ],
      });
    }
  ],
}
