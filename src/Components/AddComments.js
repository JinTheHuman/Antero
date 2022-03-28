import React, { useState } from 'react'
import './AddComments.css';

const AddComments = ({ topic, addComment, stage }) => {
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
    const handleSubmit = (event) => {
        event.preventDefault();
        addComment(text);
        setText("");
        
    }
    return (  
        <form className='add-comment' onSubmit={(e) => handleSubmit(e)}>
            <div className='comment-control'>
                <input 
                    type='text' placeholder={topic}
                    value={text} onChange={(e) => setText(e.target.value)}
                    //{stage} === 4 ? disabled
                />
            </div>
        </form>
    )
}

export default AddComments
