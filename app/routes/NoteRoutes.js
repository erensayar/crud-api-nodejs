module.exports = app => {
  const noteController = require("../controllers/NoteController");
  var router = require("express").Router();

  // Create a new Note
  router.post("/", noteController.create);

  // Get all Notes
  router.get("/", noteController.findAll);

  // Get Note with id
  router.get("/:id", noteController.findOne);

  // Update a Note with id
  router.put("/", noteController.update);

  // Delete a Note with id
  router.delete("/:id", noteController.delete);

  // Delete All Notes
  router.delete("/", noteController.deleteAll);

  app.use("/api/v1/notes", router);
};
