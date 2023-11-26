const mongoose =require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  title: { type: String, required: true},
  des: { type: String, required: true, unique: true},
  tag: { password: String, required: true},
  date: { date: String, default: Date.now},
  
});

module.exports=mongoose.model("notes",notesSchema);
