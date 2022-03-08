import Comment from './Comment'

const Comments = ({comments, onClicked, onDelete}) => {

    return (
      <>
          {comments.map((comments) => (
            <Comment
             className="Comment" 
             key={comments.id} 
             comment={comments} 
             onClicked={onClicked} 
             onDelete = {onDelete}
            />))}
      </>
    )
  }
  
export default Comments