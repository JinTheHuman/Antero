import Header from "./Components/Header";
import Column from "./Components/Column";
<<<<<<< HEAD
import Comments from "./Components/Comments"
import Confirm from "./Components/Confirm";
import React, {useState} from 'react'
=======
import Comments from "./Components/Comments";
import ExportRow from "./Components/ExportRow";
import { DragDropContext } from "react-beautiful-dnd";
import React, { useState } from "react";
>>>>>>> main

function App() {
  const [stage, setStage] = useState(1);
  const [improvements, setImprovements] = useState([
    {
      index: 0,
      text: "test1",
      likes: 0,
      column: "improvements",
      id: "droppable-0",
    },
  ]);
  const [questions, setQuestions] = useState([
    {
      index: 1,
      text: "test1",
      likes: 0,
      column: "questions",
      id: "droppable-1",
    },
  ]);
  const [workedWell, setWorkedWell] = useState([
    {
      index: 2,
      text: "test1",
      likes: 0,
      column: "workedWell",
      id: "droppable-2",
    },
    {
      index: 3,
      text: "test2",
      likes: 0,
      column: "workedWell",
      id: "droppable-3",
    },
  ]);
  const [toDo, setToDo] = useState([]);
<<<<<<< HEAD
  const [isShown, setIsShown] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [nextId, setNextId] = useState(4);
 
  const changeStage = () => {
    if (stage === 4) {
=======

  const [nextId, setNextId] = useState(4);

  const changeState = (inputStage) => {
    if (inputStage === "new") {
>>>>>>> main
      setStage(1);
    } else if (inputStage === "back") {
      setStage(4);
    } else {
      setStage(stage + 1);
    }
<<<<<<< HEAD
    setShowConfirm(false);
  }

  const updateConfirm = () => {
    if (showConfirm == false) {
      if (stage === 1 || stage === 2) {
        console.log("hello");
        setShowConfirm(true);
      } else {
        changeStage();
      }
    } else {
      setShowConfirm(false);
    }

  }
=======
  };
>>>>>>> main

  const addImprovement = (inputText) => {
    console.log("adding improvement now");
    setNextId(nextId + 1);
    const newImprovement = {
      index: nextId,
      id: "droppable-" + nextId,
      text: inputText,
      likes: 0,
      column: "improvements",
    };
    setImprovements([...improvements, newImprovement]);
    console.log({ improvements });
  };

  const addQuestions = (inputText) => {
    setNextId(nextId + 1);
    const newQuestion = {
      index: nextId,
      id: "droppable-" + nextId,
      text: inputText,
      likes: 0,
      column: "questions",
    };
    setQuestions([...questions, newQuestion]);
  };
  const addWorkedWell = (inputText) => {
    setNextId(nextId + 1);
    const newWorkedWell = {
      index: nextId,
      id: "droppable-" + nextId,
      text: inputText,
      likes: 0,
      column: "workedWell",
    };
    setWorkedWell([...workedWell, newWorkedWell]);
  };
  const addToDo = (inputText) => {
    const newToDo = { text: inputText, checked: false, column: "toDo" };
    setToDo([...toDo, newToDo]);
  };

  const deleteComment = (id, column) => {
    console.log("DELETE clicked");
    switch (column) {
      case "improvements":
        setImprovements(improvements.filter((comment) => comment.id !== id));
        console.log(improvements);
        break;
      case "questions":
        setQuestions(questions.filter((comment) => comment.id !== id));
        console.log(questions);
        break;
      case "workedWell":
        setWorkedWell(workedWell.filter((comment) => comment.id !== id));
        console.log(workedWell);
        break;
      case "toDo":
        setToDo(toDo.filter((comment) => comment.id != id));
        console.log(toDo);
        break;
      default:
        console.log("broken delete");
    }
  };

  const likedComment = (id, column) => {
    switch (column) {
      case "improvements":
        setImprovements(
          improvements.map((comment) =>
            comment.id === id
              ? { ...comment, likes: comment.likes + 1 }
              : comment
          )
        );
        console.log(improvements);
        break;
      case "questions":
        setQuestions(
          questions.map((comment) =>
            comment.id === id
              ? { ...comment, likes: comment.likes + 1 }
              : comment
          )
        );
        console.log(improvements);
        break;
      case "workedWell":
        setWorkedWell(
          workedWell.map((comment) =>
            comment.id === id
              ? { ...comment, likes: comment.likes + 1 }
              : comment
          )
        );
        console.log(improvements);
        break;
      default:
        console.log("broken");
    }
  };

  const dragEnded = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.draoppableId];
    const newTaskIds = Array.from(column.Ids);

  }


  if (stage !== 5) {
    return (
      <div>
        <Header stage={stage} changeState={changeState} />

        <div className="Columns">
          <DragDropContext onDragEnd={dragEnded}>
            <Column
              topic={"It worked well that..."}
              comments={workedWell}
              onClicked={likedComment}
              onDelete={deleteComment}
              addComment={addWorkedWell}
              stage={stage}
            />
          </DragDropContext>
          <DragDropContext onDragEnd={dragEnded}>
            <Column
              topic={"We could improve..."}
              comments={improvements}
              onClicked={likedComment}
              onDelete={deleteComment}
              addComment={addImprovement}
              stage={stage}
            />
          </DragDropContext>
          <DragDropContext onDragEnd={dragEnded}>
            <Column
              topic={"I want to ask about..."}
              comments={questions}
              onClicked={likedComment}
              onDelete={deleteComment}
              addComment={addQuestions}
              stage={stage}
            />
          </DragDropContext>
          <DragDropContext onDragEnd={dragEnded}>
            <Column
              topic={"We need to do..."}
              comments={toDo}
              onDelete={deleteComment}
              addComment={addToDo}
              stage={stage}
            />
          </DragDropContext>
        </div>
      </div >
    )
  } else {
    return (
      <div>
        <Header stage={stage} changeState={changeState} />

        <div className="ExportStage">
          <ExportRow topic={"Works"} content={workedWell} />
          <ExportRow topic={"Improve"} content={improvements} />
          <ExportRow topic={"Others"} content={questions} />
          <ExportRow topic={"Action Items"} content={toDo} />
        </div>
      </div >)
  }
<<<<<<< HEAD
  
  return (
    <div>
      <Header stage={stage} changeState={updateConfirm}/>
      <div className="Columns">
        <Column topic={"It worked well that..."} comments={workedWell} onClicked={likedComment} onDelete={deleteComment} addComment={addWorkedWell} stage={stage}/>
        <Column topic={"We could improve..."} comments={improvements} onClicked={likedComment} onDelete={deleteComment} addComment={addImprovement} stage={stage}/>
        <Column topic={"I want to ask about..."} comments={questions} onClicked={likedComment} onDelete={deleteComment} addComment={addQuestions} stage={stage}/>
        <Column topic={"We need to do..."} comments={toDo} onDelete={deleteComment} addComment={addToDo} stage={stage}/>
      </div>
      <Confirm show={showConfirm} stage={stage} changeStage={changeStage} cancel={updateConfirm}></Confirm>
    </div>
  );
=======
>>>>>>> main
}

export default App;
