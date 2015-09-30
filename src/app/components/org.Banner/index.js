import style from './style.css'
import CSSModules from 'react-css-modules'
import React from 'react'
import Button from 'atm.Btn'

const Banner = React.createClass({
  handleClick(copy) {
    return console.log(copy)
  },
  render() {
    return (
      <div className="jumbotron" styleName="pelican-banner">
        <div className="container">
          <h1>The Pelican Blog</h1>
          <br />
          <Button handleClick={this.handleClick} copy="Sign up / Log in" />
        </div>
      </div>
    )
  }
})

export default CSSModules(Banner, style)
