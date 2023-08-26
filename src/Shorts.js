import React from 'react'
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Shorts = ({heading,image}) => {
  return (
   
<div class="relative flex min-h-screen flex-col justify-start mb-0  mt-20 overflow-hidden bg-gray-50 ">
  
  <div class="relative bg-white   shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg ">
    <div class="mx-auto max-w-md justify-center ">
     <p class=" text-xl mx-12 mb-5 text-gray-500">{heading}</p>
      <div class="divide-y divide-gray-300/50">
     
        <div class=" text-base font-semibold leading-7">

       <img class=" object-cover h-72 w-72" src={image}/>
        </div>
      </div>
    </div>
    <div className='flex '>
    <Avatar className='mt-4 mb-2'/>
    <FavoriteBorderIcon className='mt-6 ml-4 mb-2'/>
    <ShareIcon className='mt-6 ml-4 mb-2'/>
    <ThumbDownIcon className='mt-6 ml-4 mb-2'/>
    <BookmarkBorderIcon className='mt-6 ml-4 mb-2'/>
    </div>

  </div>
</div>
  )
}

export default Shorts


















