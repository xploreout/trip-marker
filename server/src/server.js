//command ctrl space => emoji keys
require('dotenv').config();
const express = require('express')
const morgan = require('morgan')  //error logs
const helmet = require('helmet')
 
const cors = require('cors')
const mongoose = require('mongoose')

const middleware = require('./middlewares')
const logs = require('./api/logs')

// DATABASE_URL=mongodb+srv://tan123:tan123@cluster0.6uvtn.mongodb.net/travel-log?retryWrites=true&w=majority
// console.log('dotenv is ', dotenv)
    
const app = express()

app.use(express.json()); 

app.use(morgan('common'));
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}))

const port = process.env.PORT || 5000

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false},
    () => console.log('connected to mongodb...really')
  );
mongoose.connection.on('...connected', function(){  
    console.log("Mongoose default connection is open to ", process.env.DATABASE_URL);
 });

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World..',
  })
});


app.use('/api/logs', logs) //when route is ../api/logs --> will go to logs.js

//put this the last=== check if not found
app.use(middleware.notFound)
app.use(middleware.errorHandler)


app.listen(port, () => console.log(`Listening to port ${port}`))
