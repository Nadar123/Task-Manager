import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../../components/Avatar/Avatar";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

/*styles*/
import styled from "styled-components";

function ProjectComments({ project }) {
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore("projects");
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(project.id, {
      comment: [...project.comment, commentToAdd],
    });
    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <ProjectCommentsStyled>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
      <>
        <CommentsListTitle>Comments:</CommentsListTitle>
        {!project.comment.length < 1 && (
          <ListComments>
            {project.comment.length > 0 &&
              project.comment.map((comm) => (
                <ListItem key={comm.id}>
                  <CommentAuthor>
                    <Avatar src={comm.photoURL} />
                    <p className="displayName">{comm.displayName}</p>
                  </CommentAuthor>
                  <CommentDate>
                    <p>
                      {formatDistanceToNow(comm.createdAt.toDate(), {
                        addSuffix: true,
                      })}
                    </p>
                  </CommentDate>
                  <CommentContent>
                    <p>{comm.content}</p>
                  </CommentContent>
                </ListItem>
              ))}
          </ListComments>
        )}
      </>
    </ProjectCommentsStyled>
  );
}
export default ProjectComments;

const ProjectCommentsStyled = styled.div`
  width: 45%;
  label {
    margin: 0px;
  }

  textarea {
    min-height: 90px;
    font-size: 1rem;
  }

  .btn {
    margin: 1rem 0 0 0;
  }
`;
const CommentsListTitle = styled.h4`
  padding: 2rem 0 0.5rem 0;
`;

const ListComments = styled.ul`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
`;

const ListItem = styled.li`
  background: var(--bg-color);
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 3px 3px 2px rgb(0, 0, 0, 0.13);
  border-radius: 4px;

  .comment-author {
    display: flex;
    align-items: center;
  }
  p {
    text-transform: capitalize;
    padding: 0 0 0 10px;
  }

  p {
    padding: 0 0 0 10px;
  }
`;
const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const CommentDate = styled.div`
  padding: 10px 0 1rem 0;
`;
const CommentContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 4px;

  .comments-list-title {
    padding: 2rem 0 0 0;
  }
`;

// .comment-date {
//   padding: 10px 0 1rem 0;
// }

// .comment-content {
//   background-color: #fff;
//   padding: 1rem;
//   border-radius: 4px;
// }
