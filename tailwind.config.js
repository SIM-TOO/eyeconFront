/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Pretendard: ["Pretendard-Regular"],
      Partial: ['PartialSansKR-Regular']
    },


    extend: {

      keyframes: {
        'text-slide': {
          '0%, 16%': {
              transform: 'translateY(0%)',
          },
          '20%, 36%': {
              transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
              transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
              transform: 'translateY(-50%)',
          },
          '80%, 96%': {
              transform: 'translateY(-66.66%)',
          },
          '100%': {
              transform: 'translateY(-83.33%)',
          },
        },
        'text-slide-2': {
          '0%, 40%': {
            transform: 'translateY(0%)',
          },
          '50%, 90%': {
            transform: 'translateY(-33.33%)',
          },
          '100%': {
            transform: 'translateY(-66.66%)',
          },
        },
        'text-slide-3': {
          '0%, 26.66%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
            transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(-75%)',
          },
        },
        'text-slide-4': {
          '0%, 20%': {
            transform: 'translateY(0%)',
          },
          '25%, 45%': {
            transform: 'translateY(-20%)',
          },
          '50%, 70%': {
            transform: 'translateY(-40%)',
          },
          '75%, 95%': {
            transform: 'translateY(-60%)',
          },
          '100%': {
            transform: 'translateY(-80%)',
          },
        },
        'text-slide-5': {
          '0%, 16%': {
            transform: 'translateY(0%)',
          },
          '20%, 36%': {
            transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
            transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
            transform: 'translateY(-50%)',
          },
          '80%, 96%': {
            transform: 'translateY(-66.66%)',
          },
          '100%': {
            transform: 'translateY(-83.33%)',
          },
        },
        'text-slide-6': {
          '0%, 13.33%': {
            transform: 'translateY(0%)',
          },
          '16.66%, 30%': {
            transform: 'translateY(-14.28%)',
          },
          '33.33%, 46.66%': {
            transform: 'translateY(-28.57%)',
          },
          '50%, 63.33%': {
            transform: 'translateY(-42.85%)',
          },
          '66.66%, 80%': {
            transform: 'translateY(-57.14%)',
          },
          '83.33%, 96.66%': {
            transform: 'translateY(-71.42%)',
          },
          '100%': {
            transform: 'translateY(-85.71%)',
          },
        },
        'text-slide-7': {
          '0%, 11.43%': {
            transform: 'translateY(0%)',
          },
          '14.28%, 25.71%': {
            transform: 'translateY(-12.5%)',
          },
          '28.57%, 40%': {
            transform: 'translateY(-25%)',
          },
          '42.85%, 54.28%': {
            transform: 'translateY(-37.5%)',
          },
          '57.14%, 68.57%': {
            transform: 'translateY(-50%)',
          },
          '71.42%, 82.85%': {
            transform: 'translateY(-62.5%)',
          },
          '85.71%, 97.14%': {
            transform: 'translateY(-75%)',
          },
          '100%': {
            transform: 'translateY(-87.5%)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
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
      },
      animation: {
        'bounce1': 'bounce 2s infinite',
        'bounce2': 'bounce 2.5s infinite',
        'bounce3': 'bounce 3s infinite',
        typing: "typing 3s steps(30)  alternate, blink .7s infinite",
        typing2: "typing 1s steps(30)  alternate, blink .7s infinite",
        wiggle: 'wiggle 2s ease-in-out infinite',
        ping: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        'text-slide': 'text-slide 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',

      },
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
};
