const express = require("express");
const app = express();

// json

app.use(express.json());

//cors and other related issues allwowed here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// want to create test endpoint for any server crashes error

app.get("/test", (req, res) => {
  try {
    res.status(200).json({ message: "server is working" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const userRouter = require("./controllers/user");

// mount users
app.use("/users", userRouter);

app.listen(4000, () => {
  console.log("the server is running");
});
