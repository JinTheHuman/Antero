import React, { useState } from 'react'
import {FaTimes, FaThumbsUp} from 'react-icons/fa'
import "./Comment.css"

const Comment = ({comment, onClicked, onDelete}) => {
  const [isShown, setIsShown] = useState(false);
  
  return (
    <div className='Comment'
      // Changes if the cross is visible
        onMouseOver={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        
        {isShown || comment.column === "toDo" ? <p><FaTimes class='cross' style={{cursor:'pointer'}} onClick={()=>onDelete(comment.id, comment.column)}/></p> : 
            <p>#{comment.id}</p>
        }

        {comment.column === "toDo" ? 
        <h3 class="check-box"><input type="checkbox"/>{comment.text}</h3>
        : 
        <h3>{comment.text}</h3>}

        {comment.column !== "toDo" && 
        <p class='likes'>
            <FaThumbsUp class="like" onClick={()=>onClicked(comment.id, comment.column)}/>
            {comment.likes}
        </p>}
    </div>
  )
}
export default Comment