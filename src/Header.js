import React, { useState } from 'react';
import {Link} from "react-router-dom";
import  './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';


function Header() {
  const[inputSearch ,setInputSearch]=useState("");
  return (
   
    <div className='header'>
        <div className='header_left'>
       <MenuIcon/>
       <Link to="/" >
       <img className='header_logo' src='https://th.bing.com/th/id/OIP._0mJeL1mx94Kw7G2TkLu2QHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='#'/>
       </Link>
       </div>
       <div className='header_input'>
       <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text'/>
       <Link to={`/search/${inputSearch}`}>
       <SearchIcon className='header_inputButton'/>
       </Link>
       
       </div>
      
      <div className='header_icons'>
      <VideoCallIcon className='header_icon'/>
       <AppsIcon className='header_icon'/>
       <NotificationsIcon className='header_icon'/>
       {/* <AccountCircleIcon className='header_icon'/> */}
       <Avatar 
        alt='Ballu Boss'
        src='https://tse4.mm.bing.net/th?id=OIP.np1BGMCMmFhrQ9WCP1SeTgHaE7&pid=Api&P=0'
         />
      </div>
     

    </div>
  );
}

export default Header



















