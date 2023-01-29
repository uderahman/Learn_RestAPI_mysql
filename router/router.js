const express = require ('express')
const router = express.Router()

let users = [
  {id: 1, nama : 'ude', email:'hsjqhjdh'},
  {id: 2, nama : 'ris', email:'rise'}
]
  
 router.route('/users')
  .get ((req, res) => {
    if(users.lenght > 0) {
        res.json ({
          status : true,
          data : users,
          method : req.method,
          url : req.url
        }) 
      } else {
        res.json({
          status : false,
          massage : 'data user masih kosong'

        })
      }
    })
    .post ((req, res) => {
      users.push(req.body)
        res.send ({
          status : true,
          data : users,
          massage : 'data user berhasil',
          method : req.method,
          url : req.url
        }) 
      
    })
  //   // put yg lama
  // router.put ('/users/:id', (req, res) => {
  //   const id = req.params
  //   res.send(id)
  // })
  // put yang baru
  router.put ('/users/:id', (req, res) => {
    const id = req.params
    users.filter(user => {
      if(user.id == id) {
        user.id = id
        user.nama = req.body.nama
        user.email = req.body.email
          
        return user
      }
    })
      res.json({
        status : true,
          data : users,
          massage : 'data user diedit',
          method : req.method,
          url : req.url
      })
  })
  router.delete ('/users/:id', (req, res)=> {
    let id = req.params
    users= users.filter(user => user.id != id) // jika user.id tidak sama dgn id
    res.send ({
      status : true,
          data : users,
          massage : 'data user berhasi dihapusl',
          method : req.method,
          url : req.url
    })
  }) 
  
  module.exports = router
  