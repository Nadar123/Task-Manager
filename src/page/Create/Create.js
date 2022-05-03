import { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

/*components*/
import Select from "react-select";

// styles
import styled from "styled-components";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

function Create() {
  const [users, setUsers] = useState([]);
  const { documents } = useCollection("users");
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("projects");
  const navigate = useNavigate();
  // form field values
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [details, setDetails] = useState("");
  const [errorDetails, setErrorDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errordueDate, setErrorDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [fromError, setFromError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFromError(null);

    if (name.length < 1) {
      setErrorName("Project name is requried");
      return;
    }
    if (details.length < 1) {
      setErrorDetails("Project details is requried");
      return;
    }
    if (dueDate < 1) {
      setErrorDueDate("Due date is requried");
      return;
    }
    if (!category) {
      setFromError("Category is requried");
      return;
    }
    if (assignedUsers < 1) {
      setFromError("Plz pick a user to assign");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comment: [],
      createdBy,
      assignedUsersList,
    };

    await addDocument(project);
    if (!response.error) {
      navigate.push("/");
    }
  };

  return (
    <CreateForm>
      <h2 className="page-title">Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        {errorName && <p className="error">{errorName}</p>}
        <label>
          <span>Project Details:</span>
          <textarea
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        {errorDetails && <span className="error">{errorDetails}</span>}
        <label>
          <span>Set due date:</span>
          <input
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        {errordueDate && <span className="error">{errordueDate}</span>}
        <label>
          <span>Project category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        {fromError && <span className="error">{fromError}</span>}
        <label>
          <span>Assign to:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
        {fromError && <p className="error">{fromError}</p>}

        <button className="btn">Add Project</button>
      </form>
    </CreateForm>
  );
}

export default Create;
const CreateForm = styled.div`
  max-width: 600px;
`;
