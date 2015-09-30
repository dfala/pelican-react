import style from './style.css'
import CSSModules from 'react-css-modules'
import React from 'react'
import SearchBar from './searchBar'

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container" styleName="container">

          <div>
            <a className="navbar-brand" styleName="navbar-brand active-nav-title" href="/home">Pelican</a>
            <a className="navbar-brand" styleName="navbar-brand slash">profile</a>
            <a className="navbar-brand" styleName="navbar-brand slash">search</a>
          </div>

          <SearchBar />

          <div className="navbar-brand" styleName="navbar-brand profile">
            <a href="#">
              <p ng-if="!activeUser">Sign up / Log In</p>
            </a>
          </div>

        </div>
      </nav>
    );
  }
});

export default CSSModules(Header, style, {allowMultiple: true})
