import Header from "./Components/Header";
import Column from "./Components/Column";

import React, {useState} from 'react'

function App() {

  const [stage, setStage] = useState(1);
  const [improvements, setImprovements] = useState([{id: 0, text: "test1", likes: 0}]);
  const [questions, setQuestions] = useState([{id: 1, text: "test1", likes: 0}]);
  const [workedWell, setWorkedWell] = useState([{id: 2, text: "test1", likes: 0}]);
  const [toDo, setToDo] = useState([]);

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
        <Column topic={"It worked well that..."}/>
        <Column topic={"We could improve..."}/>
        <Column topic={"I want to ask about..."}/>
        <Column topic={"We need to do..."}/>
      </div>
    </div>
  );
}

export default App;
