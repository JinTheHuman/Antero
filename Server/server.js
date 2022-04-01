const io = require("socket.io")(5000, {
	cors: {
		origin: ["http://localhost:3001"],
	}
});

let hasLiked = [];

let stage = 1;

let improvements = [];

let questions = [];

let workedWell = [];

let toDo = [];

io.on("connection", socket => {
  console.log("hello member", socket.id);
  socket.emit("connection", socket.id);

  socket.on("addComment", (comment) => {
    console.log("adding to columng", comment);
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
    socket.broadcast.emit("receive-columns", [improvements, questions, workedWell, toDo]);
  })


  
})