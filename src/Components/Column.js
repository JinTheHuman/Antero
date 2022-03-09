import AddComments from "./AddComments"
import './Column.css';
import Comments from "./Comments";

const Column = ({ topic, comments, onClicked, onDelete, addComment}) => {
  return (
    <div className="Column">
      <div className='input-comments'>
        <AddComments topic={topic} addComment={addComment}/>
      </div>
      {<Comments comments={comments} onClicked={onClicked} onDelete={onDelete}/>}  
    </div>

  )
}

Column.defaultProps = {
  comments: [{id: "unfinished"}]
}

export default Column
