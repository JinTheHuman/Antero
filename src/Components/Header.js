import './Header.css';

const Header = ({stage}) => {
  return (
    <>
      <div className="header">
        <button className='gonext'>{stage}</button>
      </div>
      <div className='stage-bar'>
        <a className={'brainstorm-stage', (stage==='Finish Retro' ? 'Hi': '')} >Brainstorm</a>
        <span>-></span>
        <a className='brainstorm-stage'>Group & Vote</a>
        <span>-></span>
        <a className='brainstorm-stage'>Add Action Items</a>
        <span>-></span>
        <a className='brainstorm-stage'>Done</a>
      </div>
    </>

  )
}
Header.defaultProps = {
  stage: 'Finish Retro',
}


export default Header