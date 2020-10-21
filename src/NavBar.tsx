import React from 'react'
import { Store } from './Store'
import { Link } from '@reach/router'



export default function NavBar():JSX.Element {
  const { state } = React.useContext(Store)

  return (
    <React.Fragment>
      <div>
        <h2 className="logo">The Shoppies</h2>
        <nav className="nav">
          <Link to='/'>Home</Link> {"  "}
          <Link to='/nominated'>Nomination(s)</Link>
        </nav>
      </div>
      {state.nominees.length === 5 ? <p>congratulations you got 5</p>:null}
    </React.Fragment>
    );
}