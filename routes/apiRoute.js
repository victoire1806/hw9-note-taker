const router = require("express").Router();
const db = require("../db/db.json");
// Generate unique id(s) for the new note(s)
const { v4: uuidv4 } = require('uuid');

// API Routes
router.route("/notes").get((req, res) => {
    res.json(db);
  });
  
  router.route("/notes").post((req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    res.end();
  });
  
  router.route("/notes/:id").delete((req, res) => {
    const noteID = req.params.id;
  
    for (const [i, note] of notes.entries()) {
      if (note.id === noteID) {
        notes.splice(i, 1);
        break;
      }
    }
    res.end();
  });
  
  module.exports = router;