// jshint esversion:6
var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query(('select messages.storedmessage, users.username, messages.roomname from messages inner join users on messages.userid = users.userid'), (err, results, field) => {
        // if (err) {
        //   throw err;
        // }

        // console.log('Results: \n' + results);

        // res.write(results);
        // res.end();
        if (err) {
          throw err;
        } else {
          callback(err, results);
        }
      });
    }, // a function which produces all the messages
    post: function (req, callback) {
      db.connection.query((`select userid from users where users.username = ${req.body.username}`), (err, results, fields) => {
        if (err) {
          throw err;
        }
        let userid = results[0].userid;
        db.connection.query((`insert into messages (userid, storedmessage, roomname) values (${userid}, ${req.body.message}, ${req.body.roomname})`), (err, results, fields) => {
          if (err) {
            throw err;
          } else {
            callback(err, results);
          }
        });
      });
    }
    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query(('select username from users'), (err, results, fields) => {
        if (err) {
          throw err;
        } else {
          callback(err, results);
        }
      });
    },
    post: function (req, callback) {
      db.connection.query((`insert into users (username) values (${req.body.username})`), (err, results, fields) => {
        if (err) {
          throw err;
        } else {
          callback(err, results);
        }
      });
    }
    // post: function (req) {
    //   var body = '';
    //   req.on('data', function(chunks) {
    //     body += chunks;
    //   });
    //   req.on('end', function() {
    //     body = qs.parse(body);
    //     var username = body.username;
    //     db.query((`INSERT INTO users (username) VALUES (${username})`));
    //   });
    // }
  }
};
