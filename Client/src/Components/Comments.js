import Comment from "./Comment";
import { Droppable } from "react-beautiful-dnd";

const Comments = ({ comments, onClicked, onDelete }) => {
  return (
    <Droppable droppableId="comments">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {comments.map((comments, index) => (
            <Comment
              className="Comment"
              key={comments.id}
              comment={comments}
              provided={provided}
              onClicked={onClicked}
              onDelete={onDelete}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Comments;
