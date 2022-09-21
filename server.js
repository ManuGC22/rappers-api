//Here we are asking for express
const express = require('express')
//Now we are making app equal to express
const app = express()
//This module has to be installed with npm install cors --save
//This resolve all the cors error
const cors = require('cors')
//PORT is where the server is going to run
const PORT = 8000

//Here we use cors
app.use(cors())

//Use postman desktop agent on postmanAPI

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'kanye west':{
        'age': 45,
        'birthName':'Kanye Omari West',
        'birthLocation': 'Atlanta, Georgia, U.S.' 
    },
    'unknown':{
        'age': 29,
        'birthName':'unknown',
        'birthLocation': 'unknown' 
    }
}
//Express has access to two parameters, request and response. 
//request is to handle the requests and response to handle the responses
app.get('/', (request, response)=>{
    //__dirname just says that wherever the server.js is located, that is where we are gonna start looking for our html.
    response.sendFile(__dirname + '/index.html')
})

//When someone uses the url they can put that rapper name in the url, with this the url is part of th request.
//Whith the colon express knows is a query parameter.
app.get('/api/:rapperName', (request,response)=>{
    //Rapper name is now a query parameter, it takes the rapper name from the query param.
    const rappersName = request.params.rapperName.toLowerCase()
    //If rappersName inside of the objects of rappers
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})
//This is to know that our server is running.
//process.env is to make the server use the port that heroku is trying to use or use your port.
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})