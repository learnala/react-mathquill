import React from 'react'
import PropTypes from 'prop-types'
import { MathQuill } from './mathquill-loader'

const StaticMathField = (props) => {
  const { mathquillDidMount, children, ...otherProps } = props
  let element = null
  let mathField = null

  const updateMathquill = () => {
    mathField = MathQuill.StaticMath(element)

    if (mathquillDidMount) {
      mathquillDidMount(mathField)
    }
  }

  return (
    <span
      {...otherProps}
      ref={x => {
        this.element = x
        this.updateMathquill()
      }}
    >
      {children}
    </span>
  )
}

StaticMathField.propTypes = {
  children: PropTypes.string,
  mathquillDidMount: PropTypes.func,
}

export default StaticMathField
