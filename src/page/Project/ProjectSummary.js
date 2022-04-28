import React from "react";
import Avatar from "../../components/Avatar/Avatar";

function ProjectSummary({ project }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">
          {project.name}
          <span className="dueDate">
            <span className="inner">Due to: </span>
            {project.dueDate.toDate().toDateString()}
          </span>
        </h2>
        <div className="category-wrapper">
          <h4>category:</h4>
          <span>{project.category}</span>
        </div>

        <div className="due-date"></div>
        <p>Project Details:</p>
        <p className="details">{project.details}</p>
        <h4>Assigned:</h4>
        <div className="users-wrapper">
          {project.assignedUsersList.map((user) => (
            <div className="user" key={user.photoURL}>
              <span className="user-name">{user.displayName}</span>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
        <div className="created-by">
          <h4>Created By:</h4>
          <p>{project.createdBy.displayName}</p>
          <Avatar src={project.createdBy.photoURL} />
        </div>
        <h4> Ceartion date: </h4>
        <span className="ceartion-date">
          {" "}
          {project.createdAt.toDate().toDateString()}{" "}
        </span>
      </div>
    </div>
  );
}

export default ProjectSummary;
