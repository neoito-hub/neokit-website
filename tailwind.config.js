
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary':'#172b4d',
        'secondary':'#505f79',  
      },
      borderWidth: {
       '3': '3px',
      }
    }
  },
  variants: {
    whitespace: ['responsive','hover'],
    display: ['responsive','hover'],
     overflow: ['responsive','hover'],
     margin: ['responsive','hover'],
    extend: {}
  },
  plugins: []
};
