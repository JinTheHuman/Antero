
const Comment = ({comments}) => {

  return (
    <>
        {comments.map((comments) => (<h3 key={comments.id}>{comments.text}</h3>))}
    </>
  )
}

export default Comment