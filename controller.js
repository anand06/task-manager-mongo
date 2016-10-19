var model = require('./model');
var Task  = model.Task;

function create(request, response) {
  Task({
    name : request.params.name,
    time : request.params.time
  }).save(function(err, newTask){
    if(err) {
      throw err;
    }
    else {
      response.send(newTask);
    }
  });
}

function read(request, response) {
  Task.find({}, function(err, allTasks){
    if(err) {
      throw err;
    }
    else {
      response.send(allTasks);
    }
  })
}

function update(request, response) {
  Task.findById(request.params.id, function(err, task){
    if(err) {
      throw err;
    }
    else {
      task.isDone = request.params.isDone;
      task.save();
      response.send(task);
    }
  })
}

function remove(request, response) {
  Task.findById(request.params.id, function(err, task) {
    if(err) {
      throw err;
    }
    else {
      task.remove();
      response.send({ message: "DELETED" });
    }
  })
}

module.exports = {

  create : create,
  read   : read,
  update : update,
  delete : remove

}
