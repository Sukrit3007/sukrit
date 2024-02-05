import mongoose from 'mongoose';

const WorkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  subHeading: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  sourceCodeUrl: String,
  demoUrl:  String,
});

const WorkModel = mongoose.models.Work || mongoose.model('Work', WorkSchema);

export default WorkModel;
