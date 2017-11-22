var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
app.listen(3000, () => console.log('Example app listening on port 3000!'))

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', '', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
 // storage: 'path/to/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

// User.sync({force: true}).then(() => {
//   // Table created
//   return User.bulkCreate([
//         { username: 'barfooz', birtday: 1992-20-04 },
//         { username: 'foo', birtday: 1992-20-04 },
//         { username: 'bar', birtday: 1992-20-04 }
//     ])
// });
app.get('/getAllUsers', function (req, res) {
    
    User.findAll({raw: true}).then(users => {
        res.send(users)
    })
})
app.get('/getUser/:userId', function (req, res) {
   // res.send(req.params)
    User.findOne({raw: true,where: {id:req.params.userId}}).then(users => {
        res.send(users)
    })
});

app.post('/addUser', function (req, res) {
   // res.send(req.params)
    var reqBody = req.body;
    User.create({
        username: reqBody.username,
        birthday: reqBody.birthday
    });
});


