import style from './styles/main.css'
import CSSModules from 'react-css-modules'
import React from 'react'

import Header from './components/org.Header'
import Banner from './components/org.Banner'
import Post from './components/org.Post'

const TopWrapper = React.createClass({
  getInitialState() {
    return {
      posts: []
    }
  },
  componentWillMount() {
    this.firebaseRef = new Firebase('https://pelican.firebaseIO.com/posts')
    this.firebaseRef.once('value', function (snapshot) {
      let dataArray = [],
          rawData = snapshot.val()

      for (let key in rawData) { dataArray.push(rawData[key]) }
      this.setState ({ posts: dataArray })
    }.bind(this))
  },
  render() {
    return (
      <div styleName="top-wrapper">
        <Header />
        <Banner />
        <div className="container" styleName="main-body">
          <div className="col-xs-6">
            <div styleName="list">
              <ul className="post-date">
                {this.renderPost()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  renderPost() {
    if (this.state.posts.length > 0) {
      return this.state.posts.splice(0, 20).map(item => <Post data={item} key={item.postId} />)
    } else {
      return null
    }
  }
})

export default CSSModules(TopWrapper, style)
