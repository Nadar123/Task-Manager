/*hooks*/
import { useCollection } from "../../hooks/useCollection";
/*components*/
import Avatar from "../Avatar/Avatar";
/*styles*/
import "./OnlineUsers.css";

function OnlineUsers() {
  const { documents, error } = useCollection("users");

  return (
    <div className="user-list">
      <h2>User List</h2>
      {error && <div>{error}</div>}

      {documents &&
        documents.map((user) => (
          <div className="user-list-item" key={user.id}>
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}

export default OnlineUsers;
