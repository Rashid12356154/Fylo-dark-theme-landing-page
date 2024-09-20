/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors:{
        'dark-blue-main':'hsl(218, 28%, 13%)',
        'dark-blue-header':'hsl(217, 28%, 15%)',
        'dark-blue-footer':'hsl(216, 53%, 9%)',
        'darl-blue-testi':'hsl(219, 30%, 18%)',
        'Cyen':'hsl(176, 68%, 64%)',
        'blue':'hsl(198, 60%, 50%)',
        'light-red':'hsl(0, 100%, 63%)',
        'white':'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

