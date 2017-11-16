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


//START - API to get user data
app.get('/get-users', function (request, response) {
    response.send(userArr); 
});
//END - API to get user data

//Used for parsing JSON, plain text, or just returning a raw Buffer object for you to deal with as you require.
app.use(bodyParser.urlencoded({ extended: false }));

//START - API for adding new user
app.post('/add-user', function (request, response) {

    var username = request.body.username;
    
    if(username != '' && username!=undefined){
        
        let userCount = userArr[userArr.length-1].id;
        
        if(userCount > 0){
            let id = userCount+parseInt(1);
            let data = {"id":id ,"username": username };
            userArr.push(data);
            response.send(userArr);
        }
    }
});
//END - API for adding new user

//START - API for deleting a user
app.delete('/delete-user/:id', function (request, response) {
    var id= request.params.id;
    if(id!="" && id!=undefined){
        var index = userArr.findIndex(user => user.id==id);
        if(index>=0){
            userArr.splice(index,1);
            response.send(userArr);
        }
    }
});
//END - API for deleting a user
app.listen(3000, () => console.log('Hello...!!! Port 3000!'))