import {FaTimes} from 'react-icons/fa'
import React, { useState } from 'react'

const Checkbox = ({comment, onDelete}) => {
    const [isShown, setIsShown] = useState(false);
  return (
    <div className='Comment'
      // Changes if the cross is visible
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown ? <p><FaTimes class='cross' style={{cursor:'pointer'}} onClick={()=>onDelete(comment.id, comment.column)}/></p> : <p></p>}
      <label>
          <input type="checkbox"/>
            hello 
        </label>
    </div>
  )
}

export default Checkbox