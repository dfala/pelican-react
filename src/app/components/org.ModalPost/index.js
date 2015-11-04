import style from './style.css'
import CSSModules from 'react-css-modules'
import React, { PropTypes } from 'react'
import * as router from 'lucid-router'
import LoadingView from 'atm.Loading'

const ModalPost = React.createClass({
  propTypes: {
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    closeModal: PropTypes.func
  },
  getInitialState() {
    return {
      postId: null,
      title: null,
      link: null,
      description: null
    }
  },
  componentWillMount() {
      this.postRef = new Firebase('https://pelican.firebaseIO.com/posts/' + router.getLocation().state.id)
      this.postRef.once('value', function (snapshot) {
        this.setState(snapshot.val())
      }.bind(this))
  },
  render() {
    const { title, link, description } = this.state
    const { closeModal } = this.props
    if (!link) return <LoadingView />
    return (
      <div>
        <div className='modal' styleName='opened-modal'>
          <div styleName='left-bg' onClick={() => closeModal()}></div>
          <div className='modal-dialog modal-lg' styleName='inner-modal'>
            <div className='modal-content' styleName='modal-content'>
              <div className='modal-header' styleName='modal-header'>
                <button type='button' className='close' data-dismiss='modal'>
                  <span aria-hidden='true' onClick={() => closeModal()}>×</span><span className='sr-only'>Close</span>
                </button>

                <h2 className='modal-title'>{title}</h2>
                {link ? <a styleName='modal-link' href={link} target='_blank'>{link}</a> : null}
              </div>

              <div className='modal-body' styleName='modal-body' dangerouslySetInnerHTML={{__html: description}}></div>

              <div className='modal-footer' styleName='modal-footer'>
                <h3>Comments</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='modal-backdrop in'></div>
      </div>
    )
  }
})

export default CSSModules(ModalPost, style)
