import style from './style'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { levelUp } from 'app/state/actions'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'
import Charmander from 'org.Charmander'
import Button from 'atm.Btn'

const Nav = React.createClass({
  propTypes: {
    dispatch: PropTypes.func,
    activePokemon: PropTypes.object
  },

  render () {
    const { activePokemon, dispatch } = this.props
    console.warn(activePokemon)
    return (
      <Flexbox tag='header' styleName='root' justify='center'>
        <Charmander />
        {activePokemon.level}
        <div>
          <Button theme="main" copy="level me" onClick={ () => dispatch(levelUp())} />
        </div>
      </Flexbox>
    )
  }
})

const StylesNav = CSSModules(Nav, style)
export default connect(selector)(StylesNav)

function selector (state) {
  console.log('state', state);
  const { activePokemon } = state
  return {
    activePokemon
  }
}
