import style from './styles/main.css'
import CSSModules from 'react-css-modules'
import React from 'react'
import * as router from 'lucid-router'

import Header from './components/org.Header'
import Banner from './components/org.Banner'
import Post from './components/org.Post'
import ModalPost from './components/org.ModalPost'
import NotFound from './views/not.found'

const TopWrapper = React.createClass({
  getInitialState() {
    return {
      posts: [],
      modalInfo: null
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
    const { location } = this.props
    console.log(location, 'location')
    return (
      <div styleName="top-wrapper">
        <Header />
        <Banner />
        {this.renderPage()}
        {this.renderModal()}
      </div>
    )
  },
  renderPage() {
    if (location.name === 'lists') {
      return <Lists />
    } else {
      return (
        <div className="container" styleName="main-body">
          <div className="col-xs-6">
            <div styleName="list">
              <ul className="post-date">
                {this.renderPost()}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  },
  renderModal() {
    if (this.state.modalInfo) {
      let { title, link, description } = this.state.modalInfo
      return <ModalPost {...{title, link, description} } closeModal={this.closeModal} />
    } else {
        return null
    }
  },
  renderPost() {
    if (this.state.posts.length > 0) {
      return this.state.posts.map(item => <Post data={item} key={item.postId} openModal={this.openModal} />)
    } else {
      return null
    }
  },
  openModal(item) {
    var uri = '/post/' + item.postId;
    router.navigate(uri)

    this.setState({
      modalInfo: item
    })
  },
  closeModal() {
    this.setState({
      modalInfo: null
    })
  }
})

export default CSSModules(TopWrapper, style)
