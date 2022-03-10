// background color that should be loaded whatever happens because lay be used dynamically, skipping tree shaking
let bg_colors = ['current-bg-color','bg-default-theme','bg-light-theme','bg-dark-theme','bg-candy-theme','bg-violetta-theme'];
let themes = ['dark','default','light'];

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}', './assets/icons/*.svg'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'current-color':'var(--current-color)',
      'blue': "#1fb6ff",
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black':'#000000',
      'white':'#ffffff'
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    fontFamily: {
      'material':['Material Icons']
    }
  },
  safelist:[
    ...bg_colors,
    ...themes
  ]
}

