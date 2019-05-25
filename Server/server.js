const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  //GET request
  app.route('/api/users/:name').get((req, res) => {
    const requestedUserName = req.params['name']
    res.send({ name: requestedUserName })
    console.log(requestedUserName)
  })

  //GET volunteers
  app.route('/api/volunteers/').get((req, res) => {
    let mysql = require('mysql');
    let config = require('./config.js');
    
    let connection = mysql.createConnection(config);
    
    let sql = "SELECT * FROM volunteers";
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }else{
        console.log('>> results: ', results );
        var string=JSON.stringify(results);
        console.log('>> string: ', string );
        var json =  JSON.parse(string);
        console.log('>> json: ', json);
        
        console.log('>> first volunteer.name: ', json[0].username);
        console.log(json)
        console.log(results)
        res.send(results);
      
      
    }
    connection.end();
    
    });
  })
  
  app.use(express.json());

  //POST Test request
  app.post('/api/user', function(request, response){
  const requestedUser = request.body
  console.log(requestedUser.name);    
  
  response.send(request.body);    
  });

  app.post('/api/userlogin', function(request, response){
    const requestedUser = request.body
    console.log(requestedUser.name);  
    console.log(requestedUser.password);
    username=requestedUser.name;
    password=requestedUser.password;

    var dbdata = false;
    let mysql = require('mysql');
    let config = require('./config.js');
    
    let connection = mysql.createConnection(config);
    
    let sql = "SELECT userId,username,password FROM users WHERE username='"+username+"'";
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }else{
        console.log('>> results: ', results );
        var string=JSON.stringify(results);
        console.log('>> string: ', string );
        var json =  JSON.parse(string);
        console.log('>> json: ', json);
        if(json[0]==null){
          console.log('Invalid Username');
          response.send(dbdata);
        }else{

        console.log('>> user.name: ', json[0].username);
        console.log('>> user.password: ', json[0].password);
        if(json[0].password==password){
          console.log('correct password');
          dbdata=true;
          var userObj = {
            "dbdata":dbdata,
            "userId":json[0].userId
          }
          console.log(userObj)
          response.send(userObj);
        }else{
          console.log('Incorrect password');
          dbdata=false;
          response.send(dbdata);
        }
      
      }
    }
    connection.end();
    
    });
    
        
  });


  app.post('/api/vollogin', function(request, response){
    const requestedUser = request.body
    console.log(requestedUser.name);  
    console.log(requestedUser.password);
    username=requestedUser.name;
    password=requestedUser.password;

    var dbdata = false;
    let mysql = require('mysql');
    let config = require('./config.js');
    
    let connection = mysql.createConnection(config);
    
    let sql = "SELECT volunteerID,username,password FROM volunteers WHERE username='"+username+"'";
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }else{
        console.log('>> results: ', results );
        var string=JSON.stringify(results);
        console.log('>> string: ', string );
        var json =  JSON.parse(string);
        console.log('>> json: ', json);
        if(json[0]==null){
          console.log('Invalid Username');
          response.send(dbdata);
        }else{

        console.log('>> user.name: ', json[0].username);
        console.log('>> user.password: ', json[0].password);
        if(json[0].password==password){
          console.log('correct password');
          dbdata=true;
          var userObj = {
            "dbdata":dbdata,
            "userId":json[0].volunteerID
          }
          console.log(userObj)
          response.send(userObj);
        }else{
          console.log('Incorrect password');
          dbdata=false;
          response.send(dbdata);
        }
      
      }
    }
    connection.end();
    
    });
    
        
  });

  //POST Sign up request
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
 
    let stmt = "INSERT INTO users(fname,email,username,password) VALUES ('"+fname+"','"+email+"','"+username+"','"+password+"')";
            
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
