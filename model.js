var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task-manager');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({

  name    : { type: String, required: true  },
  time    : { type: Date, required: true },
  isDone  : { type: Boolean, default: false, required: true }
});

module.exports = {
  Task : mongoose.model('Task', TaskSchema)
}
