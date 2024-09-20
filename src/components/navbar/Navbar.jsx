import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import {useNotificationStore} from "../../lib/notificationStore.js"
function Navbar() {
  const [open, setOpen] = useState(false);

  const {currentUser} = useContext(AuthContext)
  const fetchNotification = useNotificationStore((state) => state.fetch);
  const notificationNumber = useNotificationStore((state) => state.number);

  // Fetch the notification number when the component mounts
  useEffect(() => {
    fetchNotification();  // Fetch the notifications when Navbar renders
  }, [fetchNotification]);

  console.log("Notification number:", notificationNumber)
  // const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
       <img src={currentUser?.avatar || "/noavatar.webp"} alt="" />
       <span>{currentUser?.username}</span>
       <Link to="/profile" className="profile">
       {notificationNumber > 0 && (
                <div className="notification">{notificationNumber}</div>
              )}
       <span>profile</span>
       </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

  