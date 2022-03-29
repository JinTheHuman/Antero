import React, { useState } from "react";
import { FaTimes, FaThumbsUp } from "react-icons/fa";
import "./Comment.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Comments from "./Comments";

const Comment = ({ comment, onClicked, onDelete }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Draggable draggableId={comment.id} index={comment.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="Comment"
          // Changes if the cross is visible
          onMouseOver={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown || comment.column === "toDo" ? (
            <p className="leftObj">
              <FaTimes
                className="cross"
                style={{ cursor: "pointer" }}
                onClick={() => onDelete(comment.id, comment.column)}
              />
            </p>
          ) : (
            <p className="leftObj">#{comment.index}</p>
          )}

          {comment.column === "toDo" ? (
            <>
              <input type="checkbox" />
              <h3 className="check-box">{comment.text}</h3>
            </>
          ) : (
            <h3 className="text">{comment.text}</h3>
          )}

          {comment.column !== "toDo" && (
            <p className="likes">
              <FaThumbsUp
                className="like"
                onClick={() => onClicked(comment.id, comment.column)}
              />
              {comment.likes}
            </p>
          )}
        </div>
      )}
    </Draggable>
  );
};
export default Comment;
