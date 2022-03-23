import Comment from "./Comment";

const Comments = ({ comments, provided, onClicked, onDelete }) => {
  return (
    <>
      {comments.map((comments) => (
        <Comment
          className="Comment"
          key={comments.id}
          comment={comments}
          provided={provided}
          onClicked={onClicked}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Comments;
