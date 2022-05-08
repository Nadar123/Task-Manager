import { useCollection } from "../../hooks/useCollection";

import Avatar from "../Avatar/Avatar";
/*styles*/

import styled from "styled-components";

function OnlineUsers() {
  const { documents, error } = useCollection("users");

  return (
    <UserList>
      <Title>All Users</Title>
      {error && <div>{error}</div>}

      {documents &&
        documents.map((user) => (
          <UserListItem key={user.id}>
            {user.online && <OnLineUsers></OnLineUsers>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </UserListItem>
        ))}
    </UserList>
  );
}

export default OnlineUsers;

const UserList = styled.div`
  /* position: fixed;
  top: 0;
  right: 0; */
  width: 250px;
  min-width: 250px;
  padding: 30px;
  box-sizing: border-box;
  background: #fbfbfb;
  color: var(--heading-color);
  .avatar {
    margin-left: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Title = styled.h2`
  text-align: right;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.2em;
`;
const UserListItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 2rem auto;
  span {
    text-transform: capitalize;
  }
`;

const OnLineUsers = styled.span`
  display: inline-block;
  margin-right: 10px;
  width: 12px;
  height: 12px;
  background: #0ebb50;
  border-radius: 50%;
  margin-top: 2px;
`;
