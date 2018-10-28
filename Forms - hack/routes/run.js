var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Run = require('../models/Run.js');

/* GET ALL RunS */
router.get('/', function(req, res, next) {
  Run.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Run BY ID */
router.get('/:id', function(req, res, next) {
  Run.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Run */
router.post('/', function(req, res, next) {
  Run.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Run */
router.put('/:id', function(req, res, next) {
  Run.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Run */
router.delete('/:id', function(req, res, next) {
  Run.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
