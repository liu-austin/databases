// jshint esversion:6
var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          throw err;
        } else {
          res.send(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, (err, results) => {
        if (err) {
          throw err;
        } else {
          res.send(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          throw err;
        } else {
          res.send(results);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req, (err, results) => {
        if (err) {
          throw err;
        } else {
          res.send(results);
        }
      });
    }
  }
};
