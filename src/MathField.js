import React from 'react'
import PropTypes from 'prop-types'
import { MathQuill } from './mathquill-loader'
import EditableMathField from './EditableMathField'
import StaticMathField from './StaticMathField'

const MathField = props => {

  if (props.readOnly) {
    return (
      <EditableMathField {...props} />
    )
  } else {
    return (
      <StaticMathField {...props}>{props.children}</StaticMathField>
    )
  }
}

MathField.propTypes = {
  readOnly: PropTypes.bool,
}

export default MathField
