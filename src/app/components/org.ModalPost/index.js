import style from './style.css'
import CSSModules from 'react-css-modules'
import React, { PropTypes } from 'react'

const ModalPost = React.createClass({
  propTypes: {
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    closeModal: PropTypes.func
  },
  render() {
    const { title, link, description, closeModal } = this.props
    return (
      <div>
        <div className="modal" styleName="opened-modal">
          <div className="modal-dialog modal-lg" styleName="inner-modal">
            <div className="modal-content" styleName="modal-content">
              <div className="modal-header" styleName="modal-header">
                <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>
                  <span aria-hidden="true">×</span><span className="sr-only">Close</span>
                </button>

                <h2 className="modal-title">{title}</h2>
                {link ? <a styleName="modal-link" href={link} target="_blank">{link}</a> : null}
              </div>

              <div className="modal-body" styleName="modal-body" dangerouslySetInnerHTML={{__html: description}}></div>

              <div className="modal-footer" styleName="modal-footer">
                <h3>Comments</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-backdrop in"></div>
      </div>
    )
  }
})

export default CSSModules(ModalPost, style)
