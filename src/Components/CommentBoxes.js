import React, { useState } from 'react'

const CommentBoxes = ({ topic }) => {
    const [text, setText] = useState('')

    /*
    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }
    */
    //onKeyPress={this.onKeyUp}
    return (  
        <form className='add-comment'>
            <div className='comment-control'>
                <input 
                    type='text' placeholder={topic}
                    value={text} onChange={(e) => setText(e.target.value)}
                />
            </div>
        </form>
    )
}

export default CommentBoxes
