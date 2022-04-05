import React from 'react'
import ReactDOM from 'react-dom'
import './Confirm.css'

const Confirm = ( {show, stage, changeStage, cancel} ) => {
	if (!show) {
		return null;
	}
	
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

  return ReactDOM.createPortal(
		<>
			<div className='Overlay'>
				<div className='confirm-box'>
				<p className='heading'>Are you sure?</p>
				<p className='body-text'>Everyone will see all comments and this can't be undone.</p>
				<div className='cancel button' onClick={cancel}>Cancel</div>
				<div className='button' onClick={changeStage}>{buttonText}</div>
				</div>
			</div>
		</>,
		document.getElementById('portal')
  )
}

export default Confirm