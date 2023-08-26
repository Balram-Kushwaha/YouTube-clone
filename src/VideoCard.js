import React from 'react';
import './VideoCard.css';
import { Avatar } from '@mui/material';



export default function VideoCard({image,title,channel,views,timestamp,}) {
  return (
    <div className='videoCard'>
      <img className='videoCard_thumbnail' src={image} alt="" />
      <div className='videoCard_info'>
      <Avatar className='header_icon' 
        src={image}
        alt='Ballu Boss'
      />
     
         <div className='videoCard_text ' >
           <h4 className='font-bold'>{title}</h4>
           <p>{channel}</p>
           <p>{views} # {timestamp}</p>
         </div>
      </div>
    </div>
  )
}
