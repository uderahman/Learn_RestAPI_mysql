import express from "express"


import { 
    getUsers,
    postUsers,
    UpdateUsers,
    deletUsers,
    getById       
} from '../controller/UsersController.js'
const router = express.Router()

// router.get('/users', getUsers );
// router.get('/users/:id', getById);
// router.post('/users', postUsers); 
// router.patch('/users/:id', UpdateUsers); 
// router.delete('/users/:id', deletUsers); 



// export default router;

// dengan menggunakan principle OOP
class usersroute extends express.Router{
    route () {
        return [
            router.get('/users', getUsers,),
            router.get('/users/:id', getById),
            router.post('/users', postUsers),
            router.patch('/users/:id', UpdateUsers),
            router.delete('/users/:id', deletUsers)
              
        ]
    }
}
export default router;



















// const userController = require('../controller/usersController')
  
//  router.route('/users')
//   .get (userController.index)
//   .post (userController.store)
// //   put yang lama
//   // router.route('/users')
// // .get (req, res) => {
// // res.send ('')
// // }
// // .put (req, res) => {
// //   res.send ('')
// // }


//   //   // put yg lama
//   // router.put ('/users/:id', (req, res) => {
//   //   const id = req.params
//   //   res.send(id)
//   // })
//   // put yang baru
//   router.route ('/users/:id')
//     .put (userController.update)
//     .delete (userController.delete)     
  
//   module.exports = router
  