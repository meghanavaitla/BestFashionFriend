var mongoose = require('mongoose');
var bcrypt=require('bcryptjs')
var numSaltRounds = 10;
var userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});
userSchema.pre('save', function(next){
    var user = this
 
    if (!user.isModified('password'))
       return next()
 
    bcrypt.hash(user.password, numSaltRounds, (err, hash) => {
       if(err) return next(err)
       user.password=hash
       next()
    })
 
 })
 
 module.exports = mongoose.model('User', userSchema)
 