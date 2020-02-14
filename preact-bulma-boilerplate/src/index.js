import { h, render } from 'preact'
import Counter from './components/Navbar'

const App = props => {
  return (
    <div>
      <h1>TESTE 123</h1>
      <Counter />
    </div>
  )
}

render(<App />, document.getElementById('app'))
