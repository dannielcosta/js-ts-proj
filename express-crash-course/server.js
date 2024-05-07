const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('Here')
    res.send("Hi")
})

const userRouter = require('./routes/users')

/* const adminRouter = require('./routes/admin') <- esta route funcionaria se existisse algum admin.routes */

app.use('/users', userRouter)

app.listen(3000)