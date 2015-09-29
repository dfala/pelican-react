import React from 'react'

const App = React.createClass({
  render() {
    return (
        <div>
          Hello world
        </div>
    );
  }
});

const toRender = React.createElement(App);
React.render(toRender, document.getElementById('app'));
