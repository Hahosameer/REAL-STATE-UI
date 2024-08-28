import React, { useState } from 'react'
import "./chat.scss"
function Chat() {
  const [chat, setChat] = useState(true);
  
  return (
    <div className='Chat'>
      <div className="messages">
        <h1>Messages</h1>
    <div className="message">

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sameer</span>
        <p>Lorem ipsum dolor... </p>
    </div>
    <div className="message">

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sameer</span>
        <p>Lorem ipsum dolor... </p>
    </div>
    <div className="message">

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sameer</span>
        <p>Lorem ipsum dolor... </p>
    </div>
    <div className="message">

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sameer</span>
        <p>Lorem ipsum dolor... </p>
    </div>
    <div className="message">

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sameer</span>
        <p>Lorem ipsum dolor... </p>
    </div>
    <div className="message">

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sameer</span>
        <p>Lorem ipsum dolor... </p>
    </div>
      </div>
 {chat && ( <div className="chatbox">
        <div className="top">
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            Sameer
          </div>
            <span className='close' onClick={()=>setChat(null)}>x</span>
        </div>
        <div className="center">
          <div className="chatMessage">
            <p>Lorem ipsum dolor sit amet.</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>Lorem ipsum dolor sit amet.</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>Lorem ipsum dolor sit amet.</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>Lorem ipsum dolor sit amet.</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>Lorem ipsum dolor sit amet.</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>Lorem ipsum dolor sit amet.</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="bottom">
          <textarea></textarea>
          <button>Send</button>
        </div>
      </div>)}
    </div> 
  )
}

export default Chat