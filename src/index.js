import React from 'react'
import App from './app'
import * as router from 'lucid-router'

router.addRoutes([
  {name: 'post',         path: '/post/:id'},
  {name: 'posts',        path: '/'}
])

// router.register(location => console.log(location.state))

//router.register(location => render(location))
render(router.getLocation())

function render(location) {
  React.render(<App location={location} />, document.body)
}
