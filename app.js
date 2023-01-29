import express from "express"
// import user from './router/users.js'
import UserRoute from "./router/users.js"
// const routerUsers = require('./router/users')
const app = express()

const port = 3000
app.use(express.json())
app.use (UserRoute)

app.listen(port,() => {
console.log(`jalan di port ${port}`)
})

//ini utk oop
// class App extends Route
// init() {
//     app.use(express.json())
//     app.use (UserRoute)
//     app.listen(port,() => {
//         console.log(`jalan di port ${port}`)
// }
// new App().init()















// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

// app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   res.render('index')
// }) 

// app.get('/about', (req, res) => { 
//   res.redirect ( '/users')
// })
  

// app.use(routerUsers)


/**
 * ude kalo ada error gitu tinggal uninstall aja node modules nya
 * oke yah
 */