import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdTv } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa"
import { SlCalender } from "react-icons/sl";
import { BsBuildings } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { IoMdHeadset } from "react-icons/io";
import { TbWorldSearch } from "react-icons/tb";
import { RiSettings5Fill } from "react-icons/ri";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './index.css'

const SideBar =() =>{
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return(
    <>
    {sidebar?( <div className="slidebar">
          <div className="logo-container">
            <TbWorldSearch className='main-logo'/>
            <button className="creating-container" type="button" onClick={showSidebar}>
    <MdKeyboardDoubleArrowLeft className="search-icon arrow"/>
  </button>
  </div>
            <div className="chat-container">
               
                <div className="names-container">
                  <div className="single-name-container">
                  <FaSearch className="search-icon"/>
                    <h1 className="small-name">Search</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                    <IoMdTv className="search-icon"/>
                    <h1 className="small-name">telivison</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                    <FaRegQuestionCircle className='search-icon'/>
                    <h1 className="small-name">Questions</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                   <SlCalender className='search-icon'/>
                    <h1 className="small-name">Calender</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                   <BsBuildings className='search-icon'/>
                    <h1 className="small-name">construction</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                    <BiSolidDollarCircle className='search-icon'/>
                    <h1 className="small-name">Currency</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                    <IoMdHeadset className='search-icon'/>
                    <h1 className="small-name">Communication</h1>
                  </div>
                </div>
                <RiSettings5Fill className="settings"/>    
            </div>  
           
        </div>
        
    ):(<div className='side-container'>
      <button className="close-button" type="button" onClick={showSidebar}>
      <TbWorldSearch className='main-logo'/>
  </button>
  <div className="close-container">
  <FaSearch className="search-icon"/>
  <IoMdTv className="search-icon"/>
  <FaRegQuestionCircle className='search-icon'/>
  <SlCalender className='search-icon'/>
  <BsBuildings className='search-icon'/>
  <BiSolidDollarCircle className='search-icon'/>
  <IoMdHeadset className='search-icon'/>

  </div>
  <RiSettings5Fill className="settings"/>    
  </div>)}
    </>

  )
}

export default SideBar