import { Link } from "react-router-dom";
/*components*/
import Avatar from "../Avatar/Avatar";
/*styles*/
import styled from "styled-components";

function ProjectList({ projects }) {
  return (
    <ProjectListStyled>
      {projects.length === 0 && (
        <p>No Projects yet, add one and start your tasks </p>
      )}
      {projects.map((project) => (
        <Link
          className="project-link"
          to={`/projects/${project.id}`}
          key={project.id}
        >
          <h4 className="project-name">{project.name}</h4>
          <p className="project-date">
            Due by: {project.dueDate.toDate().toDateString()}
          </p>
          <AssignedTo>
            <ProjectListUl>
              {project.assignedUsersList.map((user) => (
                <li className="item" key={user.id}>
                  <span className="user-name">{user.displayName}</span>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ProjectListUl>
          </AssignedTo>
        </Link>
      ))}
    </ProjectListStyled>
  );
}

export default ProjectList;

const ProjectListStyled = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
  a {
    background-color: #fff;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 1px 2px 9px 2px rgba(0, 0, 0, 0.2);
    }

    h4.project-name {
      padding: 8px 0;
      font-size: 0.9em;
      color: var(--heading-color);
    }
    p.project-date {
      color: var(--text-color);
      font-size: 0.9em;
    }
  }
`;
const AssignedTo = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
`;

const ProjectListUl = styled.ul`
  margin: 10px 0;
  display: flex;

  .item {
    margin-right: 10px;
    display: flex;
    align-items: center;
    span {
      text-transform: capitalize;
    }
  }
  .avatar {
    width: 30px;
    height: 30px;
    margin: 0 6px;
  }
`;
