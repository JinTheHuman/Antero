import Header from "./Components/Header";
import Comments from "./Components/Comments"
import React, {useState} from 'react'

function App() {
  const [comments, setComments] = useState([{id: 0, text: "test1", likes: 0},
                   {id: 1, text: "test2", likes: 0}]);
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

  const clicked = (id) => {
    console.log({comments})
    
    setComments(comments.map((comment) => comment.id === id ? { ...comment, likes: comment.likes + 1} : comment))
  }

  return (
    <div>
      <Header stage={stage} changeState={changeState}/>
      <div className="Columns">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <Comments comments={comments} onClicked={clicked}/>
      </div>
    </div>
  );
}

export default App;
