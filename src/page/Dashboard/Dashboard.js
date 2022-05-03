import React, { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import ProjectFilter from "./ProjectFilter";

import ProjectList from "../../components/ProjectList/ProjectList";

function Dashboard() {
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentfilter] = useState("all");
  const { user } = useAuthContext();

  const projects = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (u.id === user.uid) {
                assignedToMe = true;
              }
            });
            return assignedToMe;

          case "development":
          case "design":
          case "sales":
          case "marketing":
            return document.category === currentFilter;

          default:
            return true;
        }
      })
    : null;

  const changeFilter = (newFilter) => {
    setCurrentfilter(newFilter);
  };

  return (
    <>
      {error && <p className="error"> {error} </p>}
      {documents && (
        <ProjectFilter
          changeFilter={changeFilter}
          currentFilter={currentFilter}
        />
      )}
      {documents && <ProjectList projects={projects} />}
    </>
  );
}

export default Dashboard;
