/** @type {import('tailwindcss').Config} */
import UIPlugin from './tailwind/index';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [UIPlugin],
}

