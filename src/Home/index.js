import { Link } from 'react-router-dom'
import SideBar from '../SideBar'
import Note from '../Note'
import Recent from '../Recent';
import Carousel from '../Carousel';
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import './index.css'

const Home = () =>{
    return(
        <>
       
        <div className="home-container">
        <div className="side-container"> <SideBar/></div>
    <div className="side-home-container">
         <div className="header-container">
            <div className ="container">
                <div className="wish-container">
                    <h1 className="wish"> Good Afternoon, Akshay</h1>
                    <p className="plan">Your are subscribed to retail plan</p>
                </div>
                <div className="calender-container">
                    <SlCalender className="clock"/>
                    <h1 className="date"> Today,24 April</h1>
                    <FaRegClock className="clock" />
                    <p className="time">14:30</p>
                    <IoIosNotificationsOutline className="clock" />
                </div>
            </div>
         </div>
         <div><Note/></div>
         <div className="row-container">
         <div className='control-container'>
            <Carousel/>
            <Link to="/morebuttons" >
            <button type="button" className="view-button">View More</button>
            </Link>
            </div>
            <div className='recent-container'><Recent/></div>
         </div>
        </div>


         <div className="mobile-side-home-container">
         <div className="mobile-header-container">
            <div className ="mobile-container">
                <div className="mobile-wish-container">
                    <h1 className="mobile-wish"> Good Afternoon, Akshay</h1>
                    <p className="mobile-plan">Your are subscribed to retail plan</p>
                </div>
                <div className="mobile-calender-container">
                    <SlCalender className="mobile-clock"/>
                    <h1 className="mobile-date"> Today,24 April</h1>
                    <FaRegClock className="mobile-clock" />
                    <p className="mobile-time">14:30</p>
                    <IoIosNotificationsOutline className="mobile-clock" />
                </div>
            </div>
         </div>
         <div className="mobile-noted-container"><Note/></div>
         <div className="mobile-row-container">
         <div className='mobile-control-container'>
            <Carousel/>
            <button type="button" className="mobile-view-button">View More</button>
            </div>
            <div className='mobile-recent-container'><Recent/></div>
         </div>
        
         </div>
         </div>
        
        </>
       
    )
}

export default Home