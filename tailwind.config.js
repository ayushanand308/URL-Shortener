/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html','./build/js/*.js'],
  theme: {
    extend: {
      colors:{
        violet_gray:{
          400:"hsl(257, 7%, 63%)"
        },
        gray_:{
          400:"hsl(0, 0%, 75%)"
        },
        dark_violet:{
          400:"hsl(257, 27%, 26%)"
        },
        cyan_:{
          400:"hsl(180, 66%, 49%)"
        },
        violet_:{
          400:"hsl(257, 27%, 26%)"
        }

      },
      keyframes:{
        'open-menu':{
          '0%':{transform:'scaleY(0)'},
          '80%':{transform:'scaleY(0)'},
          '100%':{transform:'scaleY(0)'},
        }
      },
      animation:{
        'open-menu':'open-menu 0.5s ease-in-out forwards',
      }

    },
  },
  plugins: [],
};
