import React from 'react'
import "./home.scss"
import SearchBar from '../../components/searchBar/SearchBar'
function Home() {
  return (
    <div className='homePage'>
      <div className="textContainer">
     <div className="wrapper">
     <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Exprinces</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Award Ready</h2>
            </div>
          </div>
     </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Home