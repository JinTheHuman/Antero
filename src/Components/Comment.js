import React, { useState } from 'react'
import "./Comment.css"

 const Comment = ({comment, onClicked, onDelete}) => {
  
  return (
    <div className='Comment'>
        <button onClick={()=>onDelete(comment.id, comment.column)}>Delete</button>
        <p>#{comment.id}</p>
        <h3>{comment.text}</h3>
        <button onClick={()=>onClicked(comment.id, comment.column)}>Like</button>
        <p>{comment.likes}</p>
    </div>
  )
}
export default Comment