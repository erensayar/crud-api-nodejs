const Note = require("../models/Note");

// Get All Notes
// <====================================================================================>
// <====================================================================================>
exports.findAll = (req, res) => {
  Note.find({})
    .then(data => {

      if (!data || data.length === 0) {
        res.status(204).send
      }

      res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Get Note By Id
// <====================================================================================>
// <====================================================================================>
exports.findOne = (req, res) => {
  const id = req.params.id;

  Note.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(204).send();
    });
};

// Create Note
// <====================================================================================>
// <====================================================================================>
exports.create = (req, res) => {

  if (!req.body.title) {
    res.status(400).send({ message: "Title can not be empty!" });
    return;
  }

  const note = new Note({
    title: req.body.title,
    note: req.body.note,
  });

  note
    .save(note)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Note."
      });
    });
};


// Update Note
// <====================================================================================>
// <====================================================================================>
exports.update = (req, res) => {

  if (!req.body) {
    return res.status(400).send({
      message: "Data can not be empty for update!"
    });
  }

  if (!req.body.id) {
    return res.status(400).send({
      message: "Data ID can not be empty for update!"
    });
  }

  const id = req.body.id;

  Note.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      res.send({ message: "Note has been updated successfully." });
    })
    .catch(err => {
      res.status(404).send({ // 404 because i want add message to body.
        message: `Cannot update Note with id=${id}!`
      })
    });
};

// Delete Note By Id
// <====================================================================================>
// <====================================================================================>
exports.delete = (req, res) => {

  const id = req.params.id;

  Note.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      res.send({
        message: "Note has been deleted successfully!"
      });
    })
    .catch(err => {
      res.status(204).send();
    });
};

// Delete all Notes
// <====================================================================================>
// <====================================================================================>
exports.deleteAll = (req, res) => {
  Note.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Notes has been deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all notes."
      });
    });
};
