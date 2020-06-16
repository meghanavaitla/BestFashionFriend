var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 var UserSchema=new Schema({
     fullname:{type:String,required:true},
     username:{type:String,required:true,unique:true},
     email:{type:String,required:true,lowercase: true,unique:true},
     password:{type:String,required:true}
 });
 

 module.exports=mongoose.model('User',UserSchema);