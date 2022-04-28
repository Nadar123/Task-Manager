import { Link } from "react-router-dom";
/*components*/
import Avatar from "../Avatar/Avatar";
/*styles*/
import "./ProjectList.css";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 && (
        <p>No Projects yet, add one and start your tasks </p>
      )}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by: {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.id}>
                  <span>{user.displayName}</span>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;