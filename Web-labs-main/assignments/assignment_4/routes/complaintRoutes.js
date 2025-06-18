const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');
const { isAdmin } = require("./auth");
const {isAuthenticated} = require('../routes/auth');


// GET Contact form
router.get('/contact', isAuthenticated, (req, res) => {
  res.render('contact');
});

// POST Submit complaint
router.post('/contact', isAuthenticated, async (req, res) => {
  const { orderId, message } = req.body;
  await Complaint.create({
    userId: req.session.user._id,
    orderId,
    message
  });
  res.redirect('/complaints/my-complaints');
});

// GET User complaints
router.get('/my-complaints', isAuthenticated, async (req, res) => {
  const complaints = await Complaint.find({ userId: req.session.user._id }).sort({ timestamp: -1 });
  res.render('myComplaints', { complaints });
});

// GET Admin complaints
router.get('/admin/complaints', isAdmin, async (req, res) => {
  const complaints = await Complaint.find().populate('userId').sort({ timestamp: -1 });
  res.render('allComplaints', { complaints });
});

module.exports = router;
