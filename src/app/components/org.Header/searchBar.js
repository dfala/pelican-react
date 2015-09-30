import style from './style.css'
import CSSModules from 'react-css-modules'
import React from 'react'

const SearchBar = React.createClass({
  render() {
    return (
      <form className="search-bar navbar-form" styleName="search-bar">
        <div className="form-group">
          <input className="form-control" placeholder="Search" />
        </div>
        <button styleName="hidden">Search</button>
        <span className="glyphicon glyphicon-search" styleName="glyphicon"></span>
      </form>
    )
  }
});

export default CSSModules(SearchBar, style)
