const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send (hello)
})
app.get ('/abot', (req, res ) => {
    res.send ('ini halaman about')
})
app.get ()

app.listen(3000, () =>{
    console.log ('aman')
})