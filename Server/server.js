const express = require('express')
const app = express()


app.route('/api/users').get((req, res) => {})

app.route('/api/users').get((req, res) => {
    res.send({
      users: [{ name: 'nandun' }, { name: 'guest' }],
    })
  })


  app.route('/api/users/:name').get((req, res) => {
    const requestedCatName = req.params['name']
    res.send({ name: requestedCatName })
  })
  
  
  app.listen(3000, () => {
    console.log('Server started!')
  })