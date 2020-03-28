const express = require('express')
const mysql = require('mysql')

const app = express()

//To get MySQL container IP you just need run
//$ docker inspect mysql-container
//and get IpAddress
const connection = mysql.createConnection({
    host:'mysql-container',
    user:'root',
    password:'jonathan123',
    database:'just_to_study'
})

connection.connect()

app.get('/products', (req, res) => {
    connection.query("SELECT * FROM products", (error, results)=>{
        if(error)
            throw error

        res.send(results.map(item=>({name: item.name, price: item.price})))
    })
})

app.get('/', (req, res) => {

        res.send("<h1>Hello World!</h1>")
})


app.listen(9001, '0.0.0.0', function(){
    console.log('listening on port 9001')
})