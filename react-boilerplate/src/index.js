import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'

const App = props => {
  return (
  <Fragment>
    <NavBar />
  </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
