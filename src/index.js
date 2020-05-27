import style from '@edtr-io/mathquill/build/mathquill.css'
import EditableMathField from './EditableMathField'
import StaticMathField from './StaticMathField'

export function addStyles() {
  if (document.getElementById('react-mathquill-styles') == null) {
    const styleTag = document.createElement('style')
    styleTag.setAttribute('id', 'react-mathquill-styles')
    styleTag.innerHTML = style[0][1]

    const head = document.getElementsByTagName('head')[0]
    head.appendChild(styleTag)
  }
}

// const EditableMathField = require('./EditableMathField').default
// const StaticMathField = require('./StaticMathField').default

const MathQuill = { EditableMathField, StaticMathField }

export default MathQuill
