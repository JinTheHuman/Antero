import React, { useState } from "react";
import { FaTimes, FaThumbsUp } from "react-icons/fa";
import "./Comment.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Comments from "./Comments";

const Comment = ({ comment, onClicked, onDelete }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <DragDropContext>
      <Draggable
        key={comment.text}
        draggableId={comment.text}
        index={comment.index}
      >
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="Comment"
            // Changes if the cross is visible
            onMouseOver={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {isShown || comment.column === "toDo" ? (
              <p className="leftObj">
                <FaTimes
                  class="cross"
                  style={{ cursor: "pointer" }}
                  onClick={() => onDelete(comment.id, comment.column)}
                />
              </p>
            ) : (
              <p className="leftObj">#{comment.id}</p>
            )}

            {comment.column === "toDo" ? (
              <>
                <input type="checkbox" />
                <h3 className="check-box">{comment.text}</h3>
              </>
            ) : (
              <h3 class="text">{comment.text}</h3>
            )}

            {comment.column !== "toDo" && (
              <p class="likes">
                <FaThumbsUp
                  class="like"
                  onClick={() => onClicked(comment.id, comment.column)}
                />
                {comment.likes}
              </p>
            )}
          </div>
        )}
      </Draggable>
    </DragDropContext>
  );
};
export default Comment;
