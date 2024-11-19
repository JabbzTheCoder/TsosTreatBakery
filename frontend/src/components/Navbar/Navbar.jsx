import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import {CircleUser,ShoppingBag,Search} from 'lucide-react'


const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState('home');

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
  const naviagte = useNavigate()
  const logout = () =>{
    localStorage.removeItem("token")
    setToken("")
    naviagte("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='' className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' className={menu === 'home' ? 'active' : ''} onClick={() => setMenu('home')}>Home</Link>
        <a href='#explore-menu' className={menu === 'menu' ? 'active' : ''} onClick={() => setMenu('menu')}>Menu</a>
        <a href='#footer' className={menu === 'contact' ? 'active' : ''} onClick={() => setMenu('contact')}>Contact us</a>
      </ul>
      <div className='navbar-right'>
        <Search/>
        <div className='navbar-search-icon'>
          <Link to='/cart'><ShoppingBag/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {token?
        <div className='navbar-profile'>
          <CircleUser/>
          <ul className='nav-profile-dropdown'>
            <li><img src={assets.bag_icon} alt=''/><p>Orders</p></li>
            <hr />
            <li onClick={()=>logout()}><img src={assets.logout_icon} alt=''/><p>Logout</p></li>
          </ul>
        </div>
        :<button onClick={()=>setShowLogin(true)}>Sign in</button>}
      </div>
    </div>
  );
};

export default Navbar;