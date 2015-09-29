import React from 'react'
import Header from './app/components/org.Header'

const App = React.createClass({
  render() {
    return (
        <div>
          <Header />
          Hello world
        </div>
    );
  }
});

const toRender = React.createElement(App);
React.render(toRender, document.getElementById('app'));
