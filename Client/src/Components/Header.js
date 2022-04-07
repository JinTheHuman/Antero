import './Header.css';
import { ReactComponent as Logo } from '../assets/notes.svg';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Header = ({ stage, changeState }) => {
  var buttonText;

  switch (stage) {
    case 1:
      buttonText = "Group & vote comments";
      break;
    case 2:
      buttonText = "Discuss and add action items";
      break;
    case 3:
      buttonText = "Finish retro";
      break;
    case 4:
      buttonText = "Export";
      break;
    case 5:
      buttonText = "Back";
      break;
    default:
      buttonText = "Start new retro";
  }

  return (
    <>
      <div className="header">
        <Logo width={32} height={32} fill={"#636363"} />
        <div style={{ display: "inline-block" }} className="left-side-header">
          {(stage === 4 || stage === 5) && (
            <span className='gonext' onClick={() => changeState("new")}>
              {"Start new retro"}
            </span>
          )}
          <span className='gonext' onClick={(stage === 5 ? () => changeState("back") : changeState)}>
            {buttonText}
          </span>
        </div>
      </div>
      <div className='stage-bar'>
        <a className={'brainstorm-stage', (stage == 1 ? 'current' : '')} >Brainstorm</a>
        <span className='arrow'><AiOutlineArrowRight /></span>
        <a className={'group-stage', (stage == 2 ? 'current' : '')}>Group & Vote</a>
        <span className='arrow'><AiOutlineArrowRight /></span>
        <a className={'add-stage', (stage == 3 ? 'current' : '')}>Add Action Items</a>
        <span className='arrow'><AiOutlineArrowRight /></span>
        <a className={'done-stage', (stage == 4 ? 'current' : '')}>Done</a>
      </div>
    </>
  )
}

Header.defaultProps = {
  stage: 1,
}

export default Header