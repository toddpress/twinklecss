module.exports = {
  purge: [],
  darkMode: 'class',

  theme: {
    extend: {},

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      red:    {50:'#ffe5e5',100:'#ffb3b3',200:'#ffb3b3',300:'#ff6666',400:'#ff6666',500:'#ff0000',600:'#ff0000',700:'#b30000',800:'#b30000',900:'#b30000'},
      orange: {50:'#fff0e0',100:'#ffd1a6',200:'#ffd1a6',300:'#ffa64d',400:'#ffa64d',500:'#ffa500',600:'#ffa500',700:'#cc8400',800:'#cc8400',900:'#cc8400'},
      amber:  {50:'#fcf3dc',100:'#f5dd9b',200:'#f5dd9b',300:'#e0b645',400:'#e0b645',500:'#daa520',600:'#daa520',700:'#8f6f14',800:'#8f6f14',900:'#8f6f14'},
      yellow: {50:'#ffffe5',100:'#fffeb3',200:'#fffeb3',300:'#fffb4d',400:'#fffb4d',500:'#ffff00',600:'#ffff00',700:'#b3b300',800:'#b3b300',900:'#b3b300'},
      green:  {50:'#e5ffe5',100:'#b3ffb3',200:'#b3ffb3',300:'#66ff66',400:'#66ff66',500:'#00ff00',600:'#00ff00',700:'#00b300',800:'#00b300',900:'#00b300'},
      teal:   {50:'#e0f2f2',100:'#b3e0e0',200:'#b3e0e0',300:'#66bdbd',400:'#66bdbd',500:'#008080',600:'#008080',700:'#005353',800:'#005353',900:'#005353'},
      cyan:   {50:'#e0ffff',100:'#b3ffff',200:'#b3ffff',300:'#66ffff',400:'#66ffff',500:'#00ffff',600:'#00ffff',700:'#00b3b3',800:'#00b3b3',900:'#00b3b3'},
      blue:   {50:'#e5e5ff',100:'#b3b3ff',200:'#b3b3ff',300:'#6666ff',400:'#6666ff',500:'#0000ff',600:'#0000ff',700:'#0000b3',800:'#0000b3',900:'#0000b3'},
      indigo: {50:'#ebe5ff',100:'#c7b3ff',200:'#c7b3ff',300:'#8a66ff',400:'#8a66ff',500:'#4b0082',600:'#4b0082',700:'#2f004f',800:'#2f004f',900:'#2f004f'},
      violet: {50:'#f5e5ff',100:'#e0b3ff',200:'#e0b3ff',300:'#b366ff',400:'#b366ff',500:'#ee82ee',600:'#ee82ee',700:'#a64ca6',800:'#a64ca6',900:'#a64ca6'},
      purple: {50:'#f0e5f0',100:'#dbb3db',200:'#dbb3db',300:'#b266b2',400:'#b266b2',500:'#800080',600:'#800080',700:'#4f004f',800:'#4f004f',900:'#4f004f'},
      pink:   {50:'#ffe5f0',100:'#ffb3d6',200:'#ffb3d6',300:'#ff66ad',400:'#ff66ad',500:'#ff1493',600:'#ff1493',700:'#b30e62',800:'#b30e62',900:'#b30e62'},
      gray:   {50:'#f5f5f5',100:'#e0e0e0',200:'#e0e0e0',300:'#b3b3b3',400:'#b3b3b3',500:'#808080',600:'#808080',700:'#4d4d4d',800:'#4d4d4d',900:'#4d4d4d'},
      brown:  {50:'#efebe9',100:'#d7ccc8',200:'#d7ccc8',300:'#a1887f',400:'#a1887f',500:'#795548',600:'#795548',700:'#5d4037',800:'#5d4037',900:'#5d4037'},
      black: '#000',
      white: '#fff'
    }
  },

  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus'],
    display: ['responsive'],
    margin: ['responsive'],
    padding: ['responsive'],
  },

  corePlugins: {
    container: false,
    animation: false,
    keyframes: false,
    backdropFilter: false,
    filter: false
  }
};
