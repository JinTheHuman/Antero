import Header from "./Components/Header";
import Column from "./Components/Column";
import Comments from "./Components/Comments"
import React, { useState } from 'react'
import ExportRow from "./Components/ExportRow";

function App() {
  const [stage, setStage] = useState(1);
  const [improvements, setImprovements] = useState([{ id: 0, text: "test1", likes: 0, column: "improvements" }]);
  const [questions, setQuestions] = useState([{ id: 1, text: "test1", likes: 0, column: "questions" }]);
  const [workedWell, setWorkedWell] = useState([{ id: 2, text: "test1", likes: 0, column: "workedWell" }, { id: 3, text: "test2", likes: 0, column: "workedWell" }]);
  const [toDo, setToDo] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const [nextId, setNextId] = useState(4);

  const changeState = (inputStage) => {
    if (inputStage === "new") {
      setStage(1);
    } else if (inputStage === "back") {
      setStage(4);
    } else {
      setStage(stage + 1);
    }
  }


  const addImprovement = (inputText) => {
    console.log("adding improvement now")
    setNextId(nextId + 1)
    const newImprovement = { id: nextId, text: inputText, likes: 0, column: "improvements" }
    setImprovements([...improvements, newImprovement])
    console.log({ improvements })
  }

  const addQuestions = (inputText) => {
    setNextId(nextId + 1)
    const newQuestion = { id: nextId, text: inputText, likes: 0, column: "questions" }
    setQuestions([...questions, newQuestion])
  }
  const addWorkedWell = (inputText) => {
    setNextId(nextId + 1)
    const newWorkedWell = { id: nextId, text: inputText, likes: 0, column: "workedWell" }
    setWorkedWell([...workedWell, newWorkedWell])
  }
  const addToDo = (inputText) => {
    const newToDo = { text: inputText, checked: false, column: "toDo" }
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
      default:
        console.log("broken delete")
    }
  }

  const likedComment = (id, column) => {

    switch (column) {
      case "improvements":
        setImprovements(improvements.map((comment) => comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment));
        console.log(improvements);
        break;
      case "questions":
        setQuestions(questions.map((comment) => comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment));
        console.log(improvements);
        break;
      case "workedWell":
        setWorkedWell(workedWell.map((comment) => comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment));
        console.log(improvements);
        break;
      default:
        console.log("broken")
    }
  }

  return (
    <div>
      <Header stage={stage} changeState={changeState} />
      {stage !== 5 ? (
        <div className="Columns">
          <Column topic={"It worked well that..."} comments={workedWell} onClicked={likedComment} onDelete={deleteComment} addComment={addWorkedWell} stage={stage} />
          <Column topic={"We could improve..."} comments={improvements} onClicked={likedComment} onDelete={deleteComment} addComment={addImprovement} stage={stage} />
          <Column topic={"I want to ask about..."} comments={questions} onClicked={likedComment} onDelete={deleteComment} addComment={addQuestions} stage={stage} />
          <Column topic={"We need to do..."} comments={toDo} onDelete={deleteComment} addComment={addToDo} stage={stage} />
        </div>
      ) : (
        <div className="ExportStage">
          <ExportRow topic={"Works"} content={workedWell} />
          <ExportRow topic={"Improve"} content={improvements} />
          <ExportRow topic={"Others"} content={questions} />
          <ExportRow topic={"Action Items"} content={toDo} />
        </div>
      )}

    </div>
  );
}

export default App;
