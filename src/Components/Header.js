import './Header.css';

const Header = ({stage}) => {
  var buttonText;
  switch(stage) {
    case 1:
      buttonText = "Group & vote comments";
      break;
    case 2:
      buttonText = "Discuss and add action items";
      break;
    case 3:
      buttonText = "Finish retro";
      break;
    case 3:
      buttonText = "Start new retro";
      break;
    default:
      buttonText = "Start new retro";
  }
  
  return (
    <>
      <div className="header">
        <span className='gonext'>{buttonText}</span>
      </div>
      <div className='stage-bar'>
        <a className={'brainstorm-stage', (stage==1 ? 'current': '')} >Brainstorm</a>
        <span className='arrow'>-></span>
        <a className={'group-stage', (stage==2 ? 'current': '')}>Group & Vote</a>
        <span className='arrow'>-></span>
        <a className={'add-stage', (stage==3 ? 'current': '')}>Add Action Items</a>
        <span className='arrow'>-></span>
        <a className={'done-stage', (stage==4 ? 'current': '')}>Done</a>
      </div>
    </>

  )
}
Header.defaultProps = {
  stage: 1,
}


export default Header