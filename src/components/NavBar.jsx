// import React from 'react'
// recordar condición ? true : false
import { Button} from 'react-bootstrap';
import FormatoMiles from './FormatoMiles';
const NavBar = () => {
    const total = 25000;
    const token = false;

  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">Pizzeria Mamma Mia!</span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item cls-item-spacing">
                            <Button variant="outline-light" size="sm">🍕Home</Button>
                        </li>
                        <li className="nav-item cls-item-spacing">
                            <Button variant="outline-light" size="sm">{token ? '🔓Profile' : '🔐Login'}</Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="outline-light" size="sm">{token ? '🔒Logout' : '🔐Register'}</Button>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Button variant="outline-info" size="sm">🛒Total: $<FormatoMiles numero={total}/></Button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;
