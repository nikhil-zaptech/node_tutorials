// Include Express lib.
const app = require('express')();
const bodyParser = require('body-parser');

var userArr = [{
    "id": 1,
    "username": "Leanne Graham",
},{
    "id" :2,
    "username": "Ervin Howell",
},{
    "id" :3,    
    "username": "Clementine Bauch",
},{
    "id" :4,    
    "username": "Patricia Lebsack",
},{
    "id" :5,    
    "username": "Chelsey Dietrich",
}
];


// get API for retrive data
app.get('/get-users', function (request, response) {
    response.send(userArr); 
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))