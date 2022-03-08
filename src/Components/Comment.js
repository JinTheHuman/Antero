import React from 'react'


 const Comment = ({comment, onClicked}) => {
  return (
    <div>
        <p>#{comment.id}</p>
        <h3>{comment.text}</h3>
        <button onClick={onClicked}>Like</button>
        <p>{comment.likes}</p>
    </div>
  )
}
export default Comment