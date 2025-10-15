// const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
// const regiRoutes = require('./routes/auth.registration');
// const authRoutes = require('./routes/auth.routes');

// const app = express();
const express = require('express');
const { default: mongoose } = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/nky')
.then(() => console.log('connection successful'))
.catch((err) => console.log('connection Error:',err));
// 

app.use((req,res,next) =>{
  console.log(`${req.method} requiest for '${req.url}`);
  next();

});
app.use('/api/auth',authRoutes)
 
app.get('/',(req,res) =>{
  res.send("welcom to home page");
  
})
app.listen(3000,() =>{
    console.log('server runing on http://localhost:3000')
  })

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://127.0.0.1:27017/nky')
//   .then(() => console.log('Connection Successful'))
  // .catch((err) => console.error('Connection Error:', err));

// // Middleware to log requests for easier debug
// app.use((req, res, next) => {
//   console.log(`${req.method} request for '${req.url}'`);
//   next();
// });

// // Mount the registration routes under /api/auth
// app.use('/api/auth', authRoutes);

// app.use('/api/auth', regiRoutes);

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
