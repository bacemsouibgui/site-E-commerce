import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import { logout } from '../Redux/actions/authAction';
import './style.css';
import Image from './log.png';

const AppNavBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
      <div className ='navbar'>
        <NavItem >
          <span >
            <strong >{(user && user.role === "user") ?
              <div >
                <img id='imgpr' src={`${user.imgUser}`}></img>
                <span id = 'name'>{` ${user.name} ${user.lastName}`}</span>

                <Link to="/Panier"><img width="30px" height='30px' src="data:image/png;base64,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">
                </img></Link>
              </div>
              : <Link to="/dashboard"><Button  color="info">Dashboard</Button></Link>}

            </strong>
          </span>
          <NavLink href="/" onClick={logoutUser}>
            {' '}
            <div className='btnn'>
                <Button  color="danger">
              Logout
                </Button>
                </div>
          </NavLink>
        </NavItem>
      </div>
    </Fragment>
  );
  const guestLinks = (
    <Fragment >
      <NavItem className='pr-2'>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar expand="sm" >
      <NavbarBrand href="/"><img id='imgnav' src={Image}alt=""/></NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuth ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavBar;