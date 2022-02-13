module.exports = app => {
  const noteController = require("../controllers/NoteController");
  var router = require("express").Router();
  const auth = require("../middleware/Auth");

  router.post("/", auth, noteController.create);
  router.get("/", auth, noteController.findAll);
  router.get("/:id", auth, noteController.findOne);
  router.put("/", auth, noteController.update);
  router.delete("/:id", auth, noteController.delete);
  router.delete("/", auth, noteController.deleteAll);

  app.use("/api/v1/notes", router);
};
