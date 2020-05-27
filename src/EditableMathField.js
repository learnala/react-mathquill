import React from 'react'
import PropTypes from 'prop-types'
import { MathQuill } from './mathquill-loader'

const EditableMathField = props => {
  const { latex, onChange, config, mathquillDidMount, ...otherProps } = props
  let element = null
  let mathField = null
  let ignoreEditEvents = 4

  React.useEffect(() => {
    let config = {
      restrictMismatchedBrackets: true,
      handlers: {},
    }

    if (props.config) {
      config = {
        ...config,
        ...props.config,
      }
    }

    let configEditHandler = config.handlers.edit

    config.handlers.edit = mathField => {
      if (configEditHandler) {
        configEditHandler()
      }

      if (ignoreEditEvents > 0) {
        ignoreEditEvents -= 1
        return
      }
      if (onChange) {
        onChange(mathField)
      }
    }

    mathField = MathQuill.MathField(element, config)
    mathField.latex(latex || '')

    if (mathquillDidMount) {
      mathquillDidMount(mathField)
    }
  },[])

  /**
   * Update the mathfield's latex value if the value passed as `props.latex` doesn't match
   */

   React.useEffect(() => {
     if (mathField && mathField.latex() !== latex) {
       mathField.latex(latex)
     }
   },[mathField, latex])
  // componentDidUpdate(prevProps) {
  //   const { mathField } = this
  //   const { latex } = this.props
  //   if (mathField && prevProps.latex !== latex && mathField.latex() !== latex) {
  //     mathField.latex(latex)
  //   }
  // }



  return (
    <span
      {...otherProps}
      ref={x => {
        this.element = x
      }}
    />
  )
}

EditableMathField.propTypes = {
  latex: PropTypes.string,
  onChange: PropTypes.func,
  config: PropTypes.object,
  mathquillDidMount: PropTypes.func,
}

export default EditableMathField
