require('dotenv').config()
const express = require('express')
const app = express()
const port =4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send("Manasvee Bhatia's Server")
})
app.get('/about',(req,res)=>{
    res.send('<h2>This is h2 for about route!</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})