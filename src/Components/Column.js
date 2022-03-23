import AddComments from "./AddComments";
import "./Column.css";
import Comments from "./Comments";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Column = ({ topic, comments, onClicked, onDelete, addComment }) => {
  return (
    <div className="Column">
      <div className="input-comments">
        <AddComments topic={topic} addComment={addComment} />
      </div>
      <DragDropContext>
        <Droppable droppableId="comments">
          {(provided) => (
            <Comments
              {...provided.droppableProps} ref={provided.innerRef}
              comments={comments}
              onClicked={onClicked}
              onDelete={onDelete}
              provided={provided}
              className="comments"
            />
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

Column.defaultProps = {
  comments: [{ id: "unfinished" }],
};

export default Column;
