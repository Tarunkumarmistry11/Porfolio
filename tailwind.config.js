// TODO: Enable dark mode in Tailwind CSS with the "class" strategy.
// TODO: Add Tailwind CSS content paths for purging unused styles.
// TODO: Customize themes if necessary in the "extend" section.


/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindScrollbar],
};
