const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => res.send("Hello Node JS"));
app.listen(port, () => console.log(`Expressjs app listening on port ${port}!`));
