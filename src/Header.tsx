import React from 'react'
import { Store } from './Store'
//import {Link} from '@reach/router'


interface HeaderProps {
  man: string
}

export const Header: React.FC<HeaderProps> = ({man}) => {
  const { state } = React.useContext(Store)
  let body = null

/*   if () {

  } else if () {

  } */

  return (
    <React.Fragment>
      <h1>The Shoppies {man}</h1>
      <div>{body}</div>
      {state.nominees.length === 5 ? <p>congratulations you got 5</p>:null}
    </React.Fragment>
    );
}