//command ctrl space => emoji keys
const express = require('express');
const morgan = require('morgan'); //error logs
const helmet = require('helmet');

const cors = require('cors');
const mongoose = require('mongoose');

const handler = require('./middleware/handler');
const logs = require('./api/logs');
const authRoute = require('./api/auth');
const postRoute = require('./api/posts');

const cookieParser = require('cookie-parser');
const passport = require('passport')

const app = express();
app.use(express.json());
//middleware now we can send post request(bodyparser)

require('dotenv').config();
require('./api/config/passport');

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log('connected to mongodb...')
);

const PORT = process.env.PORT || 5000;
//middleware
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(cookieParser());
app.use(passport.initialize())

//route middleware
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World..',
  });
});

app.use('/api/logs', logs); 
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

//put this the last=== check if not found
app.use(handler.notFound);
app.use(handler.errorHandler);


app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
