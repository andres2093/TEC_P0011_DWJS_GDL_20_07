const express = require('express');
const router = express.Router();
const { Note } = require('../sequelize')
const { Op } = require('sequelize');

// Documentación
// https://sequelize.org/master/manual/model-querying-basics.html

// Dummy data
const notes = [
  {
    id: 1,
    title: 'Dummy Note',
    content: 'This is a dummy note',
  },
];

// Handler for list all notes
router.get('/', async (req, res) => {
    const notes = await Note.findAll(); // Getting all notes in database
    return res.json(notes);
});

router.get('/:search', async (req, res) => {
    let { params: { search } } = req;
    search = '%' + search + '%';
    console.log(search);
    const notes = await Note.findAll({ where: { heading: { [Op.like]: search} }});
    return res.json(notes);
});

// Handler for create a new note
router.post('/',  async (req, res) => {
    const { body } = req; // Getting data from request 
    const note = await Note.create({
      heading: body.heading,
      content: body.content,
    }); // Creating an instance of Notes
    note.save(); // Saving model in database
    return res.json({ message: 'Created successfully', data: note });
});

// Handler for update a specific note
router.put('/:id', async (req, res) => {
    const { body, params: { id } } = req; // Getting id from parameters
    const note = await Note.findByPk(id) // Finding specific noted based on id
    if (!note) {
      return res.status(404).json({ message: 'Note not found'});
    }
    // The new model with request changes
    const updatedNote = await note.update({
      heading: body.heading,
      content: body.content,
    });
    return res.json({ message: 'Updated successfully', data: updatedNote });
});

// Handler for delete a specific note
router.delete('/:id', async (req, res) => {
    const { params: { id } } = req; // Getting id from parameters
    const note = await Note.findByPk(id) // Finding specific noted based on id
    if (!note) {
      return res.status(404).json({ message: 'Note not found'});
    }
    await note.destroy(); // Destroying resource
    return res.json({ message: 'Deleted successfully' });
  });

module.exports = router;