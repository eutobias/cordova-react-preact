import React, { useState } from 'react'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleIsActive = () => setIsActive(!isActive)

  return (
    <section class='section is-small'>
      <div class='container'>
        <h1 class='title'>Hello World</h1>
        <p class='subtitle'>
          My first website with <strong>Bulma</strong>!
        </p>
      </div>
    </section>
  )
}

export default NavBar
