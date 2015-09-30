import style from './style.css'
import CSSModules from 'react-css-modules'
import React from 'react'

const Post = React.createClass({
  render() {
    return (
      <li styleName="light-border">
        <p styleName="post-title">
          Introductory course to React
        </p>

        <a href="https://www.udemy.com/learn-and-understand-reactjs/learn/" target="_blank">
          https://www.udemy.com/learn-and-understand-reactjs/learn/
        </a>

        <p styleName="post-description">This is the description of this post</p>
      </li>
    )
  }
})

export default CSSModules(Post, style)
