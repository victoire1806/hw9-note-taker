const path = require("path");
const router = require("express").Router();


    // HTML routes
    router.route("/notes").get((req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/notes.html"));
      });

      router.route("*").get((req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
      });
      
      module.exports = router;
