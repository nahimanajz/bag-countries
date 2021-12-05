import express from 'express';
import user  from '../controller/index'

const route = express();

//  route.post('/signup', user.singup);
 route.get('/testit', user.test)
// route.post('/signin', user.signin);

export default route;

