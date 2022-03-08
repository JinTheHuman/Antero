import AddComments from "./AddComments"
import './Column.css';

const Column = ({ topic }) => {
  return (
    <div className='input-comments'>
      <AddComments topic={topic} />
    </div>

  )
}

export default Column
