import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";
/*components*/
import ProjectCommentsForm from "./ProjectCommentsForm";

/*styles*/
import styled from "styled-components";

function Project() {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div> Loading...</div>;
  }

  return (
    <>
      <ProjectDetails>
        <ProjectDetailsInner>
          <ProjectSummary project={document} />
        </ProjectDetailsInner>
        <ProjectCommentsForm project={document} />
      </ProjectDetails>
    </>
  );
}

export default Project;

const ProjectDetails = styled.div`
  display: flex;
  display: flex;
  gap: 60px;
  justify-content: space-between;
  align-items: flex-start;
`;
const ProjectDetailsInner = styled.div`
  width: 48%;
`;
