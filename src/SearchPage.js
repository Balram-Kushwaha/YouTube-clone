import React from 'react';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
       <TuneIcon/>
       <h2 className="font-bold text-xl ">FILTER</h2>
      </div>
      <hr/>
        <ChannelRow
            image="https://tse4.mm.bing.net/th?id=OIP.np1BGMCMmFhrQ9WCP1SeTgHaE7&pid=Api&P=0"
            channel="Ballu Boss"
            verified
            subs="660k"
            noOfVideos={382}
            description="You Becom a boss of Business and enturprenure"
        />
        <hr/>

        <VideoRow
             title="Lets find the best idea of startup in "
            views="1.4m"
            subs="659k"
            description="yoy can start your ouwn business"
            timestamp="59 second ago"
            channel="Ballu Boss"
            image="https://img.freepik.com/premium-photo/happy-businessman-standing-pointing-up-against-room-with-large-window-looking-city_1134-74083.jpg?size=626&ext=jpg&ga=GA1.2.1820093681.1680432367&semt=ais"

        />
        <VideoRow
             title="Lets find the best idea of startup in "
            views="3.4m"
            subs="65k"
            description="Planning of business"
            timestamp="1 day ago"
            channel="Ballu Boss"
            image="https://img.freepik.com/free-photo/business-marketing-strategy-plan-operations_53876-13784.jpg?size=626&ext=jpg&ga=GA1.2.1820093681.1680432367&semt=ais"

        />
        <VideoRow
             title="Lets find the best idea of startup in "
            views="9.4m"
            subs="69k"
            description="work as coworker in industry"
            timestamp="5 hour ago"
            channel="Ballu Boss"
            image="https://img.freepik.com/free-photo/coworking-space-office-corporate-business-concept_53876-120913.jpg?size=338&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"

        />
        <VideoRow
             title="Lets find the best idea of startup in "
            views="1m"
            subs="87k"
            description="how to consult with pople"
            timestamp="1 month ago"
            channel="Ballu Boss"
            image="https://img.freepik.com/free-photo/consult-advice-information-serveice-sharing-concept_53876-125587.jpg?size=338&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"

        />
        <VideoRow
             title="Lets find the best idea of startup in "
            views="5m"
            subs="9k"
            description="Becom good thinking in business exercise is very important"
            timestamp="1 year ago"
            channel="Ballu Boss"
            image="https://img.freepik.com/free-photo/exercise-active-strong-wellness-healthcare-word_53876-121394.jpg?size=626&ext=jpg&ga=GA1.1.1820093681.1680432367&semt=ais"

        />
       
    </div>
  )
}

export default SearchPage;
