var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jwt-simple')
var bcrypt = require('bcrypt')
var User = require('./user');

mongoose.Promise = Promise;
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Hello its working');
});

app.get('/users', async (req, res) => {
    try {

        var users = await User.find({}, '-password -__v')
        res.send(users)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }

})

app.get('/profile/:id', async (req, res) => {

    try {
        var user = await User.findById(req.params.id, '-password -__v')
        res.send(user)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }

})
app.post('/register', (req, res) => {
   
    var userData = req.body;
    var user = new User((userData));
    user.save((err, newuser) => {
        if (err)
        res.json({success:false, msg: 'failed to register user'});

        var payload = { sub: newuser._id }

        var token = jwt.encode(payload, '123')

        res.status(200).send({ token })
        res.json({success:true, msg: 'user registered'});

    });
});


app.post('/login', async (req, res) => {
    var loginData = req.body;

    var user = await User.findOne({ email: loginData.email })

    if (!user)
        return res.status(401).send({ message: 'Email or password Invalid' })

    bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
        if (!isMatch)
            return res.status(401).send({ message: 'Email or password Invalid' })
        var payload = { sub: user._id }

        var token = jwt.encode(payload, '123')

        res.status(200).send({ token })
    })

    // if (loginData.password != user.password)
    //     return res.status(401).send({ message: 'Email or password Invalid' })

})

mongoose.connect("mongodb+srv://Meghana_07:vnrvjiet@cluster0-lahh1.mongodb.net/Fashion?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err)
        console.log('Connected to DB')
})
port =8000;
app.listen(port, () => {
    console.log('server is running on port '+port);
})