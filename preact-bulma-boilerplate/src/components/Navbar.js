import { h } from 'preact'
import { useState } from 'preact/hooks'

const Counter = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleIsActive = () => setIsActive(!isActive)

  return (
    <nav class='navbar' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <h1 class="logo is-size-">MarketCalc</h1>

        <a
          role='button'
          class='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
    </nav>
  )
}

export default Counter
