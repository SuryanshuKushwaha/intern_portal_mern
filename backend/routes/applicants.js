const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');

// POST applicant
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, role, skills } = req.body;
    if (!name || !email || !phone || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const app = new Applicant({ name, email, phone, role, skills });
    await app.save();
    res.json({ message: 'Application submitted', applicant: app });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all applicants
router.get('/', async (req, res) => {
  try {
    const apps = await Applicant.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE applicant
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Applicant.findByIdAndDelete(id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
