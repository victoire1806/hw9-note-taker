const express = require("express");


// Express configuration
const app = express();

// Define the Port
const PORT = process.env.PORT || 3000;

// Set up Express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 

// Routes for API & HTML
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Set up the Port Listener
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));