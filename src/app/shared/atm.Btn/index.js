import style from './style.css'
import CSSModules from 'react-css-modules'
import React, { PropTypes } from 'react'

const Button = React.createClass({
  propTypes: {
    handleClick: PropTypes.func,
    copy: PropTypes.string
  },
  render() {
    const { handleClick, copy } = this.props
    return (
      <button className="btn btn-primary btn-lg"
              styleName="btn-primary"
              onClick={() => handleClick("This hurts")}>
        {copy || "Submit"}
      </button>
    )
  }
})

export default CSSModules(Button, style)
