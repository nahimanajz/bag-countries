import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import route from './routes/index'
import env from "dotenv";

env.config();
const DB_URL = process.env.ENV !== 'production' ?process.env.MONGODB_DEV_URL:process.env.MONGODB_URL
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: '500mb'}))

app.use('/api/v1/', route);

app.listen(port, () => console.log(`App is started ${port}`));

export default app;
