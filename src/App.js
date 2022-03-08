import Header from "./Components/Header";
import Comments from "./Components/Comments"
import React, {useState} from 'react'

function App() {

  const [comments, setComments] = useState([{id: 0, text: "test1", likes: 0},
                   {id: 1, text: "test2", likes: 0}]);

  const [stage, setStage] = useState(1);
  const [improvements, setImprovements] = useState([{id: 0, text: "test1", likes: 0, column: "improvements"}]);
  const [questions, setQuestions] = useState([{id: 1, text: "test1", likes: 0, column: "questions"}]);
  const [workedWell, setWorkedWell] = useState([{id: 2, text: "test1", likes: 0, column: "workedWell"}, {id: 3, text: "test2", likes: 0, column: "workedWell"}]);
  const [toDo, setToDo] = useState([]);

  const [nextId, setNextId] = useState(0);
 
  const changeState = () => {
    if (stage === 4) {
      setStage(1);
    } else {
      setStage(stage + 1);
    }
  }


  const addImprovement = (text) => {
    console.log("adding improvement now")
    setNextId(nextId + 1)
    const newImprovement = {id: nextId, text: {text}, likes: 0, column: "improvements"}
    setImprovements([...improvements, newImprovement])
    console.log({improvements})
  }

  const addQuestions = (text) => {
    setNextId(nextId + 1)
    const newQuestion = {id: nextId, text: {text}, likes: 0, column: "questions"}
    setQuestions([...questions, newQuestion])
  }
  const addWorkedWell = (text) => {
    setNextId(nextId + 1)
    const newWorkedWell = {id: nextId, text: {text}, likes: 0, column: "workedWell"}
    setWorkedWell([...workedWell, newWorkedWell])
  }
  const addToDo = (text) => {
    const newToDo = {text: {text}, checked: false, column: "toDo"}
    setToDo([...toDo, newToDo])
  }

  const deleteComment = (id, column) => {
    console.log("DELETE clicked");
    switch (column) {
      case "improvements":
        setImprovements(improvements.filter((comment) => comment.id != id));
        console.log(improvements);
        break;
      case "questions":
        setQuestions(questions.filter((comment) => comment.id != id));
        console.log(questions);
        break;
      case "workedWell":
        setWorkedWell(workedWell.filter((comment) => comment.id != id));
        console.log(workedWell);
        break;
      case "toDo":
        setToDo(toDo.filter((comment) => comment.id != id));
        console.log(toDo);
        break;
    }
    
  }

  const likedComment = (id, column) => {
    
    switch (column) {
      case "improvements":
        setImprovements(improvements.map((comment) => comment.id === id ? { ...comment, likes: comment.likes + 1} : comment));
        console.log(improvements);
        break;
      case "questions":
        setQuestions(questions.map((comment) => comment.id === id ? { ...comment, likes: comment.likes + 1} : comment));
        console.log(improvements);
        break;
      case "workedWell":
        setWorkedWell(workedWell.map((comment) => comment.id === id ? { ...comment, likes: comment.likes + 1} : comment));
        console.log(improvements);
        break;
      default:
        console.log("broken")
    }
  }
  
  return (
    <div>
      <Header stage={stage} changeState={changeState}/>
      <div className="Columns">
        <div>Worked well
          <Comments comments={workedWell} onClicked={likedComment} onDelete={deleteComment}/>
        </div>
        <div>Improvements
          <Comments comments={improvements} onClicked={likedComment} onDelete={deleteComment}/>
        </div>
        <div>Ask
          <Comments comments={questions} onClicked={likedComment} onDelete={deleteComment}/>
        </div>
        <div>To Do</div>
        
      </div>
      
    </div>
  );
}

export default App;
