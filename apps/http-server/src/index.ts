import express from "express";
// import { client } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HI there");
});

// app.post("/", async (req, res) => {
//   const em = req.body.un;
//   const nm = req.body.nm;

//   const user = await client.user.create({
//     data: {
//       id: Math.floor(Math.random() * 1000),
//       email: em,
//       name: nm,
//     },
//   });
//   res.json(user);
// });

app.listen(3000);
