import Header from "./Components/Header";
import React, {useState} from 'react'

function App() {
  // This will hold our stage, some functionalities cannot be performed depending on the stage
  const [stage, setStage] = useState(1);
  
  // Holds the comments four each of our four columns
  const [improvements, setImprovements] = useState([{id: 0, text: "test1", likes: 0}]);
  const [questions, setQuestions] = useState([{id: 1, text: "test1", likes: 0}]);
  const [workedWell, setWorkedWell] = useState([{id: 2, text: "test1", likes: 0}]);
  const [toDo, setToDo] = useState([]);

  // Switches to the next stage
  const changeState = () => {
    if (stage === 4) {
      setStage(1);
    } else {
      setStage(stage + 1);
    }
  }

  return (
    <div className="App">
      <Header stage={stage} changeState={changeState}/>
      <div className="Columns">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
      </div>
    </div>
  );
}

export default App;
