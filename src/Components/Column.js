import AddComments from "./AddComments"
import './Column.css';
import Comments from "./Comments";

const Column = ({ topic, comments, onClicked, onDelete}) => {
  console.log(comments);
  return (
    <div className='input-comments'>
      <AddComments topic={topic} />
      {<Comments comments={comments} onClicked={onClicked} onDelete={onDelete}/>}
    </div>
  )
}

Column.defaultProps = {
  comments: [{id: "unfinished"}]
}

export default Column
