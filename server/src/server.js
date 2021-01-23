//command ctrl space => emoji keys
const express = require('express')
const morgan = require('morgan')  //error logs
const helmet = require('helmet')

const cors = require('cors')
const mongoose = require('mongoose')

const middleware = require('./middlewares')
const logs = require('./api/logs')
const authRoute = require('./api/auth')

const app = express()

require('dotenv').config();

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false},
    () => console.log('connected to mongodb...')
  );
mongoose.connection.on('...connected', function(){  
    console.log("Mongoose default connection is open to ", process.env.DATABASE_URL);
 });

//middleware
app.use(express.json()); //now we can send post request(bodyparser) 

app.use(morgan('common'));
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}))

//route middleware
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World..',
  })
});
app.use('/api/logs', logs) //when route is ../api/logs --> will go to logs.js
app.use('/api/user', authRoute)

//put this the last=== check if not found
app.use(middleware.notFound)
app.use(middleware.errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening to port ${port}`))
