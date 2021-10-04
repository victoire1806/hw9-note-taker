// Dependencies
const express = require("express");
const path = require("path");

// Express config
const app = express();

// Define the Port
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 

const apiRouter = require("./routes/apiRoute")(app);
const htmlRouter = require("./routes/htmlRoute")(app);

app.use("/api", apiRouter);
app.use("/", htmlRouter);


// Set up the Port Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
    
});
