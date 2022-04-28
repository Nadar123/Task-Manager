import React from "react";
import { useParams } from "react-router-dom";
/*hook*/
import { useAuthContext } from "../../hooks/useAuthContext";

/*styles*/
import "./ProfilePage.css";

function ProfilePage() {
  const { user } = useAuthContext();

  const { id } = useParams();

  return (
    <div>
      {user && (
        <div>
          <h1 className="page-title">{user.displayName}</h1>
          <p className="email">
            <span className="email-title"> Email: </span>
            {user.email}
          </p>
          <div className="profile-image-wrapper">
            <img className="profile-image" src={user.photoURL} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
