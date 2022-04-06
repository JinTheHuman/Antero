const io = require("socket.io")(5000, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
  }
});

let stage = 1;

let improvements = [];

let questions = [];

let workedWell = [];

let toDo = [];

let nextId = 0;

io.on("connection", socket => {
  console.log("hello member", socket.id);
  socket.emit("connection", socket.id);
  socket.emit("receive-current-state", ([stage, improvements, questions, workedWell, toDo, nextId]));

  socket.on("change-stage", (stageCLIENT) => {
    console.log("Stage changed to:", stage);
    stage = stageCLIENT;
    socket.broadcast.emit("receive-stage", stage);
  })

  socket.on("newRetro", () => {
    console.log("New retro starting");
    improvements = [];
    questions = [];
    workedWell = [];
    toDo = [];
    socket.broadcast.emit("receive-new-retro");
  })

  socket.on("addComment", (comment) => {
    console.log("adding to column", comment);
    switch (comment.column) {
      case "workedWell":
        workedWell.push(comment);
        break;
      case "questions":
        questions.push(comment);
        break;
      case "improvements":
        improvements.push(comment);
        console.log(improvements);
        break;
      case "todo":
        toDo.push(comment);
        break;
      default:
        break;
    }
    nextId += 1;
    socket.broadcast.emit("receive-nextId", nextId);
    socket.broadcast.emit("receive-columns", [improvements, questions, workedWell, toDo]);
  })

  socket.on("deleteComment", (id, column) => {
    console.log("deleting comment now", column);
    switch (column) {
      case "workedWell":
        workedWell = workedWell.filter((comment) => comment.id !== id);
        console.log(workedWell);
        break;
      case "questions":
        questions = questions.filter((comment) => comment.id !== id);
        break;
      case "improvements":
        improvements = improvements.filter((comment) => comment.id !== id);
        break;
      case "todo":
        toDo = toDo.filter((comment) => comment.id !== id);
        break;
      default:
        console.log("default");
        break;
    }
    socket.broadcast.emit("receive-columns", [improvements, questions, workedWell, toDo]);
  })

  socket.on("like-comment", (client) => {
    console.log("liked", client[0]);
    let idCLIENT = client[0]
    let clientId = client[2]
    switch (client[1]) {
      case "improvements":
        for (let i = 0; i < improvements.length; i++) {
          if (improvements[i].id == idCLIENT && !(improvements[i].likedClients.includes(clientId))) {
            console.log("like is updated");
            improvements[i].likes += 1;
            improvements[i].likedClients.push(clientId);
            break;
          }
        }
        console.log("after liking in imporvements", improvements);
        break;
      case "questions":
        for (var i in questions) {
          if (questions[i].id == idCLIENT && !(questions[i].likedClients.includes(clientId))) {
            questions[i].likes += 1;
            questions[i].likedClients.push(clientId);
            break;
          }
        }
        break;
      case "workedWell":
        for (var i in workedWell) {
          if (workedWell[i].id == idCLIENT && !(workedWell[i].likedClients.includes(clientId))) {
            workedWell[i].likes += 1;
            workedWell[i].likedClients.push(clientId);
            break;
          }
        }
        break;
      default:
        console.log("broken");
    }

    socket.broadcast.emit("receive-columns", [improvements, questions, workedWell, toDo]);
    // socket.broadcast.emit("receive-likes", []);
  })

})