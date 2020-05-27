import style from '@edtr-io/mathquill/build/mathquill.css'
// import MathField from './MathField'

export function addStyles() {
  if (document.getElementById('react-mathquill-styles') == null) {
    const styleTag = document.createElement('style')
    styleTag.setAttribute('id', 'react-mathquill-styles')
    styleTag.innerHTML = style[0][1]

    const head = document.getElementsByTagName('head')[0]
    head.appendChild(styleTag)
  }
}

export const MathQuill = require('exports-loader?window.MathQuill!imports-loader?window.jQuery=jquery!@edtr-io/mathquill/build/mathquill.js')

export const EditableMathField = require('./EditableMathField').default
export const StaticMathField = require('./StaticMathField').default
