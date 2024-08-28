import React from "react";
import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

function ProfilePage() {
  return (
    <div className="ProfilePage">
      <div className="details">
        <div className="wrapper">
        <div className="title">
          <h1>User information</h1>
          <button>Updated Profile</button>
        </div>
        <div className="info">
            <span>
                Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </span>
            <span>User: <b>Sameer</b></span>
            <span>Email: <b>Sameer@gmail.com</b></span>
        </div>
        <div className="title">
          <h1>My List</h1>
          <button>Creat New Post</button>
        </div>
        <List />
        <div className="title">
          <h1>Saved List</h1>
        </div>
        <List />
      </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
