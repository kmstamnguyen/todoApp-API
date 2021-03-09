// app/routes.js

// load the todo model
var Todo = require("./models/todo");
var User = require("./models/user");
var Board = require("./models/board");
var Task = require("./models/task");
const userRepository = require("./repositories/User");


module.exports = function (app) {
  app.get("/", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("hello world");
  });

  // create todo and send back all todos after creation
  app.post("/users", function (req, res) {
    User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((user) => {
        res.json(user);
      })
      .catch((error) => res.send(err));
  });

  app.get("/users", function (req, res) {
    User.find(function (err, users) {
      if (err) res.send(err);
      res.json(users);
    });
  });

  app.post("/boards", function (req, res) {
    Board.create(
      {
        name: req.body.name,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      function (err) {
        if (err) res.send(err);
        Board.find(function (err, users) {
          if (err) res.send(err);
          res.json(users);
        });
      }
    );
  });

  app.get("/boards", function (req, res) {
    Board.find(function (err, boards) {
      if (err) res.send(err);
      res.json(boards);
    });
  });

  app.post("/tasks", function (req, res) {
    console.log("new task", req.body);
    Task.create(
      {
        title: req.body.title,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: req.body.status,
        board: req.body.board,
        joined: req.body.joined,
      },
      function (err) {
        if (err) res.send(err);
        Board.find(function (err, users) {
          if (err) res.send(err);
          res.json(users);
        });
      }
    );
  });
  app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const task = {
      title: req.body.title,
      updatedAt: new Date(),
      status: req.body.status,
      board: req.body.board,
      joined: req.body.joined,
    };
    const query = { _id: id };
    Task.updateOne(query, { $set: task })
      .then(res.status(200).json([]))
      .catch((error) => console.log(error));
  });

  app.put("/tasks", function (req, res) {
    Task.create(
      {
        title: req.body.title,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: req.body.status,
        board: req.body.board,
        joined: req.body.joined,
      },
      function (err) {
        if (err) res.send(err);
        Board.find(function (err, users) {
          if (err) res.send(err);
          res.json(users);
        });
      }
    );
  });

  app.get("/tasks", function (req, res) {
    Task.find(function (err, tasks) {
      if (err) res.send(err);
      res.json(tasks);
    });
  });

  app.delete("/task/delete/:id", function (req, res) {
    Task.remove(
      {
        _id: req.params.id,
      },
      function (err, todo) {
        if (err) res.send(err);
        Task.find(function (err, tasks) {
          if (err) res.send(err);
          res.json(tasks);
        });
      }
    );
  });
};
