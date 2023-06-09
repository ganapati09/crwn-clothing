import React,{ Fragment } from 'react'
import { Outlet , Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo} from '../../../assets/crown.svg'

import './nav.scss';
function Nav() {
  return (
      <Fragment>
          <div className="navigation">
              <Link className="logo-container" to='/'>
                    <CrwnLogo  className="logo" />
              </Link>
              <div className="nav-links-container">
                  <Link className='nav-link' to='/shop'>SHOP</Link>
                  <Link className='nav-link' to='/shop'>Contact</Link>
                  <Link className='nav-link' to='/auth'>Sign In</Link>
              </div>
          </div>
            <Outlet />
              
      </Fragment>
  )
}

export default Nav