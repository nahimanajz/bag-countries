import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import route from './routes/index'

dotenv.config();
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express()
app.use(bodyParser.json());

app.use('/api/v1', route)
app.get('/test', (req, res)=> res.send({msg: 'hi Janvier'}))

app.listen(process.env.PORT || 5000, ()=> { console.log(`Server started at ${process.env.PORT}`) });
