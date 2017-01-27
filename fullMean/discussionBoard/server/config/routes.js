console.log("routes");

var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var posts = require('../controllers/posts.js');
var comments = require('../controllers/comments.js');
module.exports = function(app){
  // app.get('/users/:id', users.show);
  app.post('/login', users.login);
  app.post('/users', users.create);
  // app.put('/users/:id', users.update);
  // app.delete('/users/:id', users.delete);

  app.get('/topics', topics.index);
  app.get('/categories', topics.category);
  app.get('/topics/:id', topics.show);
  app.post('/topics/:id', topics.create);

  app.get('/posts/:id', posts.index);
  app.post('/posts/:id', posts.create);
  app.post('/comments/:id', comments.create);
}
