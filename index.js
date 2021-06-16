const express = require("express");
const cors = require("cors");

const logger = require("./loggerMiddleware");
const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

const array = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(array);
});

app.get("/api/notes/:id", (req, res) => {
  const id = req.params;
  console.log(id);
  res.json(array);
});

app.use((req, res) => {
  res.status(404).json({
    error: "F ya fue",
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto: ", PORT);
});
