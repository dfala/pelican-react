import style from './style.css'
import CSSModules from 'react-css-modules'
import React, { PropTypes } from 'react'


const Post = React.createClass({
  propTypes: {
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    openModal: PropTypes.func
  },
  render() {
    const { title, link, description } = this.props.data
    const { openModal } = this.props
    return (
      <li styleName="light-border" onClick={() => openModal(this.props.data)}>
        <p styleName="post-title">
          {title}
        </p>

        <a href={link} target="_blank">
          {link}
        </a>

        <p styleName="post-description">{description}</p>
      </li>
    )
  }
})

export default CSSModules(Post, style)
