const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


  app.route('/').get((req,res) => {
    res.send("Sithivili Server is Up...");

  })

  //GET user request
  app.route('/api/users/:id').get((req, res) => {
    const requestedID = req.params['id']
    let mysql = require('mysql');
    let config = require('./config.js');
    
    let connection = mysql.createConnection(config);
    
    let sql = "SELECT * FROM users WHERE userid="+requestedID;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }else{
        console.log('>> results: ', results );
        var string=JSON.stringify(results);
        console.log('>> string: ', string );
        var json =  JSON.parse(string);
        console.log('>> json: ', json);
        
        console.log('>> user.name: ', json[0].username);
        console.log(json)
        var userObj = {
          "username":json[0].username,
          "userId":json[0].userid,
          "userType":json[0].usertype
        }
        console.log(userObj)
        res.send(userObj);
      
      
    }
    connection.end();
    
    });
  })

  //GET volunteers
  app.route('/api/volunteers/').get((req, res) => {
    let mysql = require('mysql');
    let config = require('./config.js');
    
    let connection = mysql.createConnection(config);
    
    let sql = "SELECT * FROM users WHERE usertype='Volunteer'";
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
    
    let sql = "SELECT userid,username,password,usertype FROM users WHERE username='"+username+"'";
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
            "userId":json[0].userid,
            "userType":json[0].usertype
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
            "volID":json[0].volunteerID
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
    console.log(requestedUser.username);
    console.log(requestedUser.mobile);
    console.log(requestedUser.password);
    const username = requestedUser.username;
    const mobile = requestedUser.mobile;
    const password = requestedUser.password;




    let mysql = require('mysql');
    let config = require('./config.js');
    let connection = mysql.createConnection(config);
 
    let stmt = "INSERT INTO users(mobileno,username,password) VALUES ('"+mobile+"','"+username+"','"+password+"')";
            
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
  
  app.listen(process.env.PORT || 5000, () => {
    console.log('Sithivili Server started!')
    console.log(process.env.PORT)
  })
