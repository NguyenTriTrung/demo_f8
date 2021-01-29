const mongoose=require("mongoose");
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const course = new Schema({
  name: {type:String,required:true},
  desciption: {type:String,maxLength:600},
  videoId:{type:String,required:true},
  level:{type:String,required:true},
  image: {type:String,maxLength:255},
  slug:{type:String,slug:'name',unique:true},
},{
  timestamps:true,
});
course.plugin(mongooseDelete,{ overrideMethods: 'all' ,deletedAt:true});
module.exports=mongoose.model('course', course);