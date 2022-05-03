import React from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../../components/Avatar/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
/*styles*/
import styled from "styled-components";

function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteDocument(project.id);
    navigate.push("/");
  };
  return (
    <>
      <ProjectSummarystyled>
        <PageTitle>{project.name}</PageTitle>
        <p className="dueDate">
          <span className="inner">Due to: </span>
          {project.dueDate.toDate().toDateString()}
        </p>
        <CategoryWrapper>
          <h4 className="sub-title">category:</h4>
          <span>{project.category}</span>
        </CategoryWrapper>
        <CreatedBy>
          <h4 className="sub-title">By:</h4>
          <span>{project.createdBy.displayName}</span>
        </CreatedBy>

        <p>Project Details:</p>
        <p className="details">{project.details}</p>
        <h4 className="sub-title">Assigned:</h4>
        <UsersWrapper>
          {project.assignedUsersList.map((user) => (
            <User key={user.photoURL}>
              <span className="user-name">{user.displayName}</span>
              <Avatar src={user.photoURL} />
            </User>
          ))}
        </UsersWrapper>

        <h4 className="sub-title"> Ceartion date: </h4>
        <p className="ceartion-date">
          {project.createdAt.toDate().toDateString()}{" "}
        </p>
      </ProjectSummarystyled>

      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleDelete}>
          Mark as comolete
        </button>
      )}
    </>
  );
}

export default ProjectSummary;

const ProjectSummarystyled = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  margin: 0 0 1rem 0;
  .details {
    margin: 30px 0;
    color: var(--text-color);
    line-height: 1.8em;
    font-size: 14px;
    font-weight: 300;
  }
  .sub-title {
    color: var(--text-color);
    font-size: 0.9em;
    padding: 0 10px 0 0;
  }

  .dueDate .inner {
    color: var(--text-color);
  }
  .ceartion-date {
    font-size: 14px;
    padding: 0 0 10px 0;
  }
  .btn {
    margin: 0px;
  }
`;

const PageTitle = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: var(--primary-color);
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 1rem 0;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 0 0;
`;
const CreatedBy = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 2rem 0;
`;
const UsersWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 1rem 1rem 0;
  .user-name {
    padding: 0 8px 8px 0px;
    font-size: 14px;
  }
`;

// .project-summary+.btn {
//   margin: 0px;
// }

// .created-by {
//   display: flex;
//   align-items: baseline;
//   padding: 0rem 0 1rem 0;
// }

// .ceartion-date {
//   font-size: 14px;
//   padding: 0 0 10px 0;
// }
