import style from './Loading.css'
import CSSModules from 'react-css-modules'
import React from 'react'

const Loading = React.createClass({
  render() {
    return (
      <div styleName='backdrop'>
        <img src='http://2.bp.blogspot.com/-N_cQ8kfm9-k/VQnJkpl_ZTI/AAAAAAAAN34/zsn32rYre60/s1600/Twitter+6.jpg' />
      </div>
    )
  }
})

export default CSSModules(Loading, style)
