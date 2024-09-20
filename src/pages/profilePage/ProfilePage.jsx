import React, { Suspense, useContext } from "react";
import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import loader from "../../../public/loder.gif";

function ProfilePage() {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  const data = useLoaderData();



  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ProfilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src={currentUser?.avatar || "/noavatar.webp"}
                alt="User Avatar"
              />
            </span>
            <span>
              User: <b>{currentUser?.username}</b>
            </span>
            <span>
              Email: <b>{currentUser?.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>

          {/* Post List */}
          <div className="title">
            <h1>My Posts</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          

          <Suspense  fallback={<img style={{width: "30px"}} src={loader} alt="loader" />}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
              >
              {(postResponse) => (
                <List posts={postResponse?.data?.userPosts || []} />
              )}
            </Await>
          </Suspense>
    

          {/* Saved Posts */}
          <div className="title">
            <h1>Saved Posts</h1>
          </div>
          <Suspense  fallback={<img style={{width: "30px"}} src={loader} alt="loader" />}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => (
                <List posts={postResponse?.data?.savedPosts || []} />
              )}
            </Await>
          </Suspense>
        </div>
      </div>

      {/* Chat Component */}
      <div className="chatContainer">
        <div className="wrapper">
        <Suspense  fallback={<img style={{width: "30px"}} src={loader} alt="loader" />}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => (
                <Chat chats={chatResponse?.data || []} />
              )}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
