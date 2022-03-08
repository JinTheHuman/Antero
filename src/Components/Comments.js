import Comment from './Comment'

const Comments = ({comments, onClicked}) => {

    return (
      <>
          {comments.map((comments) => (
            <Comment className="Comment" key={comments.id} comment={comments} onClicked={onClicked}/>))}
      </>
    )
  }
  
export default Comments