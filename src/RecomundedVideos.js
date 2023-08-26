import React from 'react';
import './RecomundedVideos.css'
import VideoCard from './VideoCard';
import Shorts from './Shorts';

export default function RecomundedVideos() {
  return (
    <div className=' recommundedVideos'>
      <h1 className='font-bold'>Recommended Viedos</h1>
      <div className='recommundedVideos_videos'>
      <VideoCard
        title="T-20 World Cup | 2019/2020"
        views="2.3M Views"
        timestamp="3 days ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/free-vector/1t20-world-cup-cricket-championship-poster-template-brochure-decorated-flyer-banner-design_460848-15727.jpg?size=626&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="Becom a business man | 2022/2023"
        views="1.3M Views"
        timestamp="2 days ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?size=626&ext=jpg&ga=GA1.2.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="Connect with the nature | 2021/2022"
        views="8.3M Views"
        timestamp="5 days ago"
        channel="Balram Kushwaha"
                image=" https://img.freepik.com/free-psd/flat-design-nature-banner-template_23-2149392818.jpg?size=626&ext=jpg&ga=GA1.2.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="You becom a grate business ideas | 2018/2019"
        views="12.3M Views"
        timestamp="1 days ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/free-psd/flat-design-business-template_23-2149951999.jpg?size=626&ext=jpg&ga=GA1.2.1820093681.1680432367&semt=ais"
      />
      <div className='flex space-x-1 mt-0 mb-0'>
    <p className='font-bold text-3xl text-pink-500'>Shotrs</p>
    <div className='flex flex-wrap'>
      <Shorts heading="Your forst Post" image="https://images.unsplash.com/photo-1685777090945-3da36175a7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Shorts heading="your second post" image="https://images.unsplash.com/photo-1686284850482-d7701d0e1ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"/>
      <Shorts heading="Youe third post" image="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <Shorts heading="your fourth post" image="https://images.unsplash.com/photo-1685945720494-10ceacfb5f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" /> 
      </div>
      </div>
      <VideoCard
        title="Break the barriars in your life | 2022/2023"
        views="1 M Views"
        timestamp="1 Month ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/free-psd/break-barriers-hiking-template_23-2148475508.jpg?size=626&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="Top 10 trekking beginner | 2020/2021"
        views="6.3M Views"
        timestamp="8 days ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/free-vector/flat-design-trekking-youtube-thumbnail_23-2149231434.jpg?size=626&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="Welcon to yoga for healthy life| 2020/2022"
        views="9.3M Views"
        timestamp="1 hours ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/free-vector/gradient-geometric-sport-youtube-thumbnail_23-2148923762.jpg?size=626&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="Explore the whole world | 2021/2022"
        views="9.3M Views"
        timestamp="1 hours ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg?size=626&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="you use the Multimedia| 2019/2020"
        views="9.3M Views"
        timestamp="1 hours ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/free-photo/music-lifestyle-leisure-entertainment-concept_53876-13833.jpg?size=626&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="Tips for your small business | 2017/2018"
        views="9.3M Views"
        timestamp="1 hours ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/premium-vector/abstract-business-youtube-thumbnail_23-2148918547.jpg?size=626&ext=jpg&ga=GA1.2.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="Never give up in business try again | 2019/2020"
        views="9.3M Views"
        timestamp="1 hours ago"
        channel="Balram Kushwaha"
        image="https://img.freepik.com/free-photo/build-your-own-body-strength-fitness-exercise-get-fit_53876-21370.jpg?size=626&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"
      />
      <VideoCard
        title="Ms Dhoni news | 2020/2021"
        views="9.3M Views"
        timestamp="1 hours ago"
        channel="Balram Kushwaha"
        image="https://th.bing.com/th?id=OIP.05LSJEbkRBkRw-4Ff4jRVQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
      />
      <VideoCard
        title="The best vision for change the world | 2020/2021"
        views="9.3M Views"
        timestamp="1 hours ago"
        channel="Balram Kushwaha"
         image=" https://img.freepik.com/free-vector/motivational-retro-typographic-design_23-2147486840.jpg?size=338&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"
      />
     
</div>
    </div>
  )
}









