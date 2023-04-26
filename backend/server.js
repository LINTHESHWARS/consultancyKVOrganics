const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./routers/UserRouter');
const AdminRouter = require('./routers/AdminRouter');
const GetDetailRouter = require('./routers/GetdetailsRouter');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


//       ** Connect Mongo DB **
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


//      ** Create Server **


//      ** routers **
app.use("/user",userRouter);
app.use("/admin/add",AdminRouter);
app.use("/get",GetDetailRouter);


app.listen(5000, () => {
  console.log("Server is running at port 5000");
});



