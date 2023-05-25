const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbconnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 5000;


//app.use is for middleware
app.use(express.json()); //provides a parser which helps the server read the data from the stream that the client is sending
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});