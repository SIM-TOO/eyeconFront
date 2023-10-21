/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Pretendard: ["Pretendard-Regular"]
    },
    extend: {
      translate3d: {
        '10-55-0': '10px, 55px, 0px',
        '15-0-0': '15px, 0px, 0px',
        '25-0-0': '25px, 0px, 0px',
        // ... 다른 값들
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme, variants }) {
      const values = theme('translate3d');
      const newUtilities = Object.keys(values).reduce((acc, key) => {
        acc[`.translate3d-${key}`] = {
          transform: `translate3d(${values[key]})`
        };
        return acc;
      }, {});
      addUtilities(newUtilities, variants('translate3d'));
    },
  ],
}
