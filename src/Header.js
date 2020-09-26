import React ,{useState}from "react";
import './Header.css';
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import { Avatar } from "@material-ui/core";
import {Link} from 'react-router-dom'


function Header() {
  const [inputSearch,setInput] =useState('')
  return (
    <div className="header">
      <div className='header__left'>
      <MenuIcon />
      {/* <VideoCallIcon/> */}

      <Link to='/'>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        alt=""
        className="header__logo"
      />
      </Link>
      </div>
      <div className='header__input'>
      <input onChange={e=>setInput(e.target.value)} value={inputSearch} placeholder='Search' type='text'/>
      <Link to={`/Search/${inputSearch}`}>
      <SearchIcon className='header__search'/>
      </Link>
      </div>

      <div className='header__icons'>
      <VideoCallIcon className='header__icon'/>
      <AppsIcon  className='header__icon'/>
      <NotificationIcon  className='header__icon'/>
      <Avatar 
        alt=''
        src='https://www.w3schools.com/howto/img_avatar.png' 
      />
      </div>
      
    </div>
  );
}

export default Header;
