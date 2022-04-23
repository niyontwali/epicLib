module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#18181b',
        secondary: '#3f3f46',
        tertiary: '#fafafa',
        success: '#0e7490',
        luck: '#155e75'
      }
    },
  },
  plugins: [],
}
