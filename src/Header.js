import React, { useState, useEffect } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import CartIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountIcon from '@mui/icons-material/PersonOutlined'
import { Link } from 'react-router-dom'
import { useStateValue} from './StateProvider'
import { auth } from './firebase'
import './Home'


function Header({data, parentStateSetter}) {
    const [{basket, user}, dispatch] = useStateValue();

    const result = data;

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

    const handleSearchChange = (e) => {
        const resultsArray = result.filter(result => result.title.toLowerCase().includes(e.target.value.toLowerCase()))
        if(!resultsArray.length === 0) {
            parentStateSetter(result)
        } else parentStateSetter(resultsArray)
        
    }

  return (
    <div className='container'>
        <div className='header'>
            <div className='header__nav_wrapper'>
                <Link to="/">
                    <img className='header_logo' src='https://ae01.alicdn.com/kf/S46f745032e6e4f3da94f1a3df564f238K/398x92.png'/>        
                </Link>
                <div className='header__search'>
                    <input className='header__searchInput' type="text" onChange={handleSearchChange}/>
                    <SearchIcon htmlColor='white' className='header__searchIcon' />
                </div>
                <div className='header__nav'>
                    <Link to="/checkout">
                        <div className='header__cart'>
                            <CartIcon fontSize='medium' className="header__cartIcon"/>
                            <p>{basket?.length}</p>
                        </div>
                    </Link>
                    <Link to={!user && '/login'} className='link__account'>
                        <div className='header__account' onClick={handleAuth}>
                            <AccountIcon className="header__accountIcon"/>
                            <span>{user ? 'Sign out' : 'Sign in'}</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mobile__search">
                <div className='mobile__search__container'>
                    <div className='header__searchMobile'>
                        <input className='header__searchInput' type="text" />
                        <SearchIcon htmlColor='white' className='header__searchIcon' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;