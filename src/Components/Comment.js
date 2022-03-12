import React, { useState } from 'react'
import {FaTimes, FaThumbsUp} from 'react-icons/fa'
import "./Comment.css"

 const Comment = ({comment, onClicked, onDelete}) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className='Comment'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      

      {isShown ? <p><FaTimes class='cross' style={{cursor:'pointer'}} onClick={()=>onDelete(comment.id, comment.column)}/></p> : <p>#{comment.id}</p>}
      <h3>{comment.text}</h3>
      <p>
        <FaThumbsUp class='like' onClick={()=>onClicked(comment.id, comment.column)}/>
        {comment.likes}
      </p>
    </div>
  )
}
export default Comment