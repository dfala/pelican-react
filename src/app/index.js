import style from './styles/main.css'
import CSSModules from 'react-css-modules'
import React from 'react'
import Header from './components/org.Header'
import Banner from './components/org.Banner'

const TopWrapper = React.createClass({
  render() {
    return (
      <div styleName="top-wrapper">
        <Header />
        <Banner />
      </div>
    )
  }
})

export default CSSModules(TopWrapper, style)
