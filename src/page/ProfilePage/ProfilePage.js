import React from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

/*styles*/
import styled from "styled-components";

function ProfilePage() {
  const { user } = useAuthContext();

  const { id } = useParams();

  return (
    <>
      {user && (
        <>
          <PageTitle>{user.displayName}</PageTitle>
          <Email>
            <EmailTitle> Email: </EmailTitle>
            {user.email}
          </Email>
          <ProfileImageWrapper>
            <ProfileIAvatar
              className="profile-image"
              src={user.photoURL}
              alt=""
            />
          </ProfileImageWrapper>
        </>
      )}
    </>
  );
}

export default ProfilePage;

const PageTitle = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 42px;
  text-transform: capitalize;
`;

const Email = styled.p`
  color: var(--primary-color);
  padding: 0 0 2rem 0;
`;

const EmailTitle = styled.span`
  color: #000;
`;
const ProfileImageWrapper = styled.div`
  width: 400px;
`;

const ProfileIAvatar = styled.img`
  width: 100%;
`;
