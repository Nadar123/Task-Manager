import React from "react";
import { useCollection } from "../../hooks/useCollection";

/*componentes*/
import ProjectList from "../../components/ProjectList/ProjectList";

function Dashboard() {
  const { documents, error } = useCollection("projects");

  return (
    <div>
      {error && <p className="error"> {error} </p>}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}

export default Dashboard;
