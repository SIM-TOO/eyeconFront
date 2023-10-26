/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Pretendard: ["Pretendard-Regular"]
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },

      translate3d: {
        '10-55-0': '10px, 55px, 0px',
        '15-0-0': '15px, 0px, 0px',
        '25-0-0': '25px, 0px, 0px',
        // ... 다른 값들
      }
,
      animation: {
        'bounce1': 'bounce 2s infinite',
        'bounce2': 'bounce 2.5s infinite',
        'bounce3': 'bounce 3s infinite',
                typing: "typing 3s steps(30) infinite alternate, blink .7s infinite"
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
