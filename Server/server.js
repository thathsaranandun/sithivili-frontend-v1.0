const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  app.route('/api/users').get((req, res) => {
    res.send({
      users: [{ name: 'nandun' }, { name: 'guest' }],
    })
  })


  app.route('/api/users/:name').get((req, res) => {
    const requestedCatName = req.params['name']
    res.send({ name: requestedCatName })
    console.log(requestedCatName)
  })
  
  
  app.listen(3000, () => {
    console.log('Server started!')
  })