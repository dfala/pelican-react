import style from './styles/main.css'
import CSSModules from 'react-css-modules'
import React from 'react'

import Header from './components/org.Header'
import Banner from './components/org.Banner'
import Post from './components/org.Post'

const TopWrapper = React.createClass({
  render() {
    return (
      <div styleName="top-wrapper">
        <Header />
        <Banner />
        <div className="container main-body">
          <div className="col-xs-6">
            <div styleName="list">
              <ul className="post-date">
                <Post />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default CSSModules(TopWrapper, style)
