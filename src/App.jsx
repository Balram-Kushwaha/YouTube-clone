import React from 'react';
import './app.css';
import SearchPage from './SearchPage';
import RecomundedVideos from './RecomundedVideos';
import Sidebar from './Sidebar';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Shorts from './Shorts';


function App(){

    return(
        <div className='app'>
        <Router>
        <Header/>
            <Routes className="app_page">
                <Route element={<div className='app_page'>
                <Sidebar/>
                <SearchPage/>
                </div>} path="/search/:searchTerm"/>
                <Route element={ <div className='app_page'>
                <Sidebar/>
                <RecomundedVideos/>
                {/* <Shorts/> */}
                </div>} 
                path="/"/> 
                
                
            </Routes>
        </Router>

    

 

        </div>
    )
}

export default App;