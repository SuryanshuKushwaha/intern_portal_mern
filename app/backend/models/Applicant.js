const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type:String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ['Intern', 'Volunteer'], required: true },
  skills: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Applicant', applicantSchema);