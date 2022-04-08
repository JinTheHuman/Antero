import Header from "./Components/Header";
import Column from "./Components/Column";
import ExportRow from "./Components/ExportRow";
import { DragDropContext } from "react-beautiful-dnd";
import React, { useState, useEffect } from "react";
import Confirm from "./Components/Confirm";
import { io } from "socket.io-client";

function App() {
  // SOCKET STUFF

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    console.log("creating socket");
    const newSocket = io(`http://${window.location.hostname}:5000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);


  // SOCKET STUFF

  const [stage, setStage] = useState(1);
  const [improvements, setImprovements] = useState([
    // {
    //   index: 0,
    //   text: "test1",
    //   likes: 0,
    //   column: "improvements",
    //   id: "droppable-0",
    // },
  ]);
  const [questions, setQuestions] = useState([
    // {
    //   index: 1,
    //   text: "test1",
    //   likes: 0,
    //   column: "questions",
    //   id: "droppable-1",
    // },
  ]);
  const [workedWell, setWorkedWell] = useState([
    // {
    //   index: 2,
    //   text: "test1",
    //   likes: 0,
    //   column: "workedWell",
    //   id: "droppable-2",
    // },
    // {
    //   index: 3,
    //   text: "test2",
    //   likes: 0,
    //   column: "workedWell",
    //   id: "droppable-3",
    // },
  ]);
  const [toDo, setToDo] = useState([]);

  const [nextId, setNextId] = useState(0);

  const [showConfirm, setShowConfirm] = useState(false);

  const [clientId, setClientId] = useState(null);

  if (socket) {
    socket.on("connection", (id) => {
      console.log("You are conencted with ", id);
      setClientId(id);
      // updateMessage(receivedMessages.message);
    });

    socket.on("receive-nextId", (nextIdSERVER) => {
      setNextId(nextIdSERVER);
    })

    // socket.on("receive-likes", (columns) => {
    //   console.log("recieving likes");
    //   setImprovements(columns[0]);
    //   setQuestions(columns[1]);
    //   setToDo(columns[3]);
    //   setWorkedWell(columns[2]);
    // });

    socket.on("receive-columns", (columns) => {
      console.log("Receiving columsn");
      setImprovements(columns[0]);
      setQuestions(columns[1]);
      setToDo(columns[3]);
      setWorkedWell(columns[2]);
    })

    socket.on("receive-current-state", (SERVER) => {
      console.log("receive", SERVER);
      setStage(SERVER[0]);
      setImprovements(SERVER[1]);
      setQuestions(SERVER[2]);
      setWorkedWell(SERVER[3]);
      setToDo(SERVER[4]);
      setNextId(SERVER[5]);
    })

    socket.on("receive-stage", (stageSERVER) => {
      console.log("receiving stage", stageSERVER);
      setStage(stageSERVER);
    })

    // socket.on("receive-new-retro", () => {
    //   console.log("receiving new retro");
    //   setImprovements([]);
    //   setQuestions([]);
    //   setWorkedWell([]);
    //   setToDo([]);
    // })
  }

  const changeState = (inputStage) => {
    console.log("this is called ", inputStage);
    if (inputStage === "new") {
      socket.emit("change-stage", 1);
      socket.emit("newRetro");
      setImprovements([]);
      setQuestions([]);
      setWorkedWell([]);
      setToDo([]);
      setNextId(0);
      setStage(1);
    } else if (inputStage === "back") {
      socket.emit("change-stage", 4);
      setStage(4);
    } else {
      socket.emit("change-stage", stage + 1);
      setStage(stage + 1);
    }
    setShowConfirm(false);
  };

  const updateConfirm = (inputStage) => {
    if (showConfirm === false) {
      if (stage === 1 || stage === 2) {
        setShowConfirm(true);
      } else {
        changeState(inputStage);
      }
    } else {
      setShowConfirm(false);
    }
  };

  const addImprovement = (inputText) => {
    console.log("adding improvement now");
    setNextId(nextId + 1);
    const newImprovement = {
      index: nextId,
      id: "improvements-" + nextId,
      text: inputText,
      likes: 0,
      likedClients: [],
      column: "improvements",
      drag_id: improvements.length,
    };
    setImprovements([...improvements, newImprovement]);
    socket.emit("addComment", newImprovement);
    console.log({ improvements });
  };

  const addQuestions = (inputText) => {
    setNextId(nextId + 1);
    const newQuestion = {
      index: nextId,
      id: "questions-" + nextId,
      text: inputText,
      likes: 0,
      likedClients: [],
      column: "questions",
      drag_id: questions.length,
    };

    setQuestions([...questions, newQuestion]);
    socket.emit("addComment", newQuestion);
  };
  const addWorkedWell = (inputText) => {
    setNextId(nextId + 1);
    const newWorkedWell = {
      index: nextId,
      id: "workedWell-" + nextId,
      text: inputText,
      likes: 0,
      likedClients: [],
      column: "workedWell",
      drag_id: workedWell.length,
    };
    setWorkedWell([...workedWell, newWorkedWell]);
    socket.emit("addComment", newWorkedWell);
  };
  const addToDo = (inputText) => {
    setNextId(nextId + 1);
    const newToDo = { 
      text: inputText, 
      checked: false, 
      column: "toDo", 
      drag_id: toDo.length,
      id: "toDo-" + nextId,
    };
    setToDo([...toDo, newToDo]);
    socket.emit("addComment", newToDo);
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
        setToDo(toDo.filter((comment) => comment.id !== id));
        console.log(toDo);
        break;
      default:
        console.log("broken delete");
    }
    socket.emit("deleteComment", id, column);
  };

  const likedComment = (id, column) => {
    socket.emit("like-comment", ([id, column, clientId]));
    switch (column) {
      case "improvements":
        setImprovements(
          improvements.map((comment) =>
            (comment.id === id && !comment.likedClients.includes(clientId))
              ? { ...comment, likes: comment.likes + 1, likedClients: [...comment.likedClients, clientId] }
              : comment
          )
        );
        console.log(improvements);
        console.log("here");
        break;
      case "questions":
        setQuestions(
          questions.map((comment) =>
            (comment.id === id && !comment.likedClients.includes(clientId))
              ? { ...comment, likes: comment.likes + 1, likedClients: [...comment.likedClients, clientId] }
              : comment
          )
        );
        console.log(questions);
        break;
      case "workedWell":
        setWorkedWell(
          workedWell.map((comment) =>
            (comment.id === id && !comment.likedClients.includes(clientId))
              ? { ...comment, likes: comment.likes + 1, likedClients: [...comment.likedClients, clientId] }
              : comment
          )
        );
        console.log(workedWell);
        break;
      default:
        console.log("broken");
    }
  };

  const dragEnded = (result) => {
    console.log(result);
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (result.draggableId.includes("workedWell")) {
      const newItems = [...workedWell];
      const [removed] = newItems.splice(result.source.index, 1);
      console.log(removed);
      newItems.splice(result.destination.index, 0, removed);
      setWorkedWell(newItems);
    } else if (result.draggableId.includes("questions")) {
      const newItems = [...questions];
      const [removed] = newItems.splice(result.source.index, 1);
      console.log(removed);
      newItems.splice(result.destination.index, 0, removed);
      setQuestions(newItems);
    } else if (result.draggableId.includes("improvements")) {
      const newItems = [...improvements];
      const [removed] = newItems.splice(result.source.index, 1);
      console.log(removed);
      newItems.splice(result.destination.index, 0, removed);
      setImprovements(newItems);
    }
  };

  if (stage !== 5) {
    return (
      <div>
        <Header stage={stage} changeState={updateConfirm} />

        <div className="Columns">
          <DragDropContext onDragEnd={dragEnded}>
            <div
              style={
                stage === 4 ? { pointerEvents: "none", opacity: "0.4" } : {}
              }
            >
              <Column
                topic={"It worked well that..."}
                comments={workedWell}
                onClicked={likedComment}
                onDelete={deleteComment}
                addComment={addWorkedWell}
                stage={stage}
              />
            </div>
          </DragDropContext>
          <DragDropContext onDragEnd={dragEnded}>
            <div
              style={
                stage === 4 ? { pointerEvents: "none", opacity: "0.4" } : {}
              }
            >
              <Column
                topic={"We could improve..."}
                comments={improvements}
                onClicked={likedComment}
                onDelete={deleteComment}
                addComment={addImprovement}
                stage={stage}
              />
            </div>
          </DragDropContext>
          <DragDropContext onDragEnd={dragEnded}>
            <div
              style={
                stage === 4 ? { pointerEvents: "none", opacity: "0.4" } : {}
              }
            >
              <Column
                topic={"I want to ask about..."}
                comments={questions}
                onClicked={likedComment}
                onDelete={deleteComment}
                addComment={addQuestions}
                stage={stage}
              />
            </div>
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
        <Confirm
          show={showConfirm}
          stage={stage}
          changeStage={changeState}
          cancel={updateConfirm}
        ></Confirm>
      </div>
    );
  } else {
    return (
      <div>
        <Header stage={stage} changeState={updateConfirm} />

        <div className="ExportStage">
          <ExportRow topic={"Works"} content={workedWell} />
          <ExportRow topic={"Improve"} content={improvements} />
          <ExportRow topic={"Others"} content={questions} />
          <ExportRow topic={"Action Items"} content={toDo} />
        </div>
      </div>
    );
  }
}

export default App;
