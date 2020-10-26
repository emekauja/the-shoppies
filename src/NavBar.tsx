import React, { useState } from 'react'
import { Store } from './Store'
import { Link } from '@reach/router'



export default function NavBar():JSX.Element {
  const { state } = React.useContext(Store)
  const [navbar, setNavbar] = useState<boolean>(false)

  const changeSize = (): void => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeSize)

  return (
    <React.Fragment>
      <nav className={ navbar ?"nav nav-scroll" : "nav" }>
        <div className="nav-container">
          <h2 className="logo">The Shoppies</h2>
          <div className="nav-links">
            <Link to='/'>Home</Link> {"  "}
            <Link to='/nominated'>Nomination(s)</Link>
          </div>
        </div>
      </nav>
      {state.nominees.length === 5 ? <p>congratulations you got 5</p>:null}
    </React.Fragment>
    );
}