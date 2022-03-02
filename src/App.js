import Header from "./Components/Header";
import React, {useState} from 'react'

function App() {

  const [stage, setStage] = useState(1);
  const [improvements, setImprovements] = useState([{id: 0, text: "test1", likes: 0}]);
  const [questions, setQuestions] = useState([{id: 1, text: "test1", likes: 0}]);
  const [workedWell, setWorkedWell] = useState([{id: 2, text: "test1", likes: 0}]);
  const [toDo, setToDo] = useState([]);

  
  return (
    <div className="App">
      <Header stage={stage}/>
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
