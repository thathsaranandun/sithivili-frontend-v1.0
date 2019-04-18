const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/* 
  app.route('/api/users').get((req, res) => {
    res.send({
      users: [{ name: 'nandun' }, { name: 'guest' }],
    })
  }) */

  //GET request
  app.route('/api/users/:name').get((req, res) => {
    const requestedUserName = req.params['name']
    res.send({ name: requestedUserName })
    console.log(requestedUserName)
  })
  
  app.use(express.json());

  //POST request
  app.post('/api/user', function(request, response){
  const requestedUser = request.body
  console.log(requestedUser.name);    
  
  response.send(request.body);    
  });

  //POST request
  app.post('/api/newuser', function(request, response){
    const requestedUser = request.body
    console.log(requestedUser.fname);
    console.log(requestedUser.username);
    console.log(requestedUser.email);
    console.log(requestedUser.password);
    const fname = requestedUser.fname;
    const username = requestedUser.username;
    const email = requestedUser.email;
    const password = requestedUser.password;



    let mysql = require('mysql');
    let config = require('./config.js');
    let connection = mysql.createConnection(config);
 
    let stmt = "INSERT INTO users(fname,email,username,password) VALUES ('"+fname+"','"+username+"','"+email+"','"+password+"')";
            
    let todo = ['Insert a new row with placeholders', false];
 
    // execute the insert statment
    connection.query(stmt, todo, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }

    });


    connection.end();
    response.send(request.body);    
  });
  
  app.listen(3000, () => {
    console.log('Server started!')
  })


 
