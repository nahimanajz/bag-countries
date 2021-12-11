import express from 'express';
import user  from '../controller/User'
import country  from '../controller/Country'
import vh from '../helpers';

const route = express();

// route.post('/signup', user.signup);
route.post('/signup', user.signup);
 route.post('/signin', user.signin);
route.get('/countries', country.getAll);
route.post('/add/country', country.addCountry);
route.put('/update/country', country.updateCountry);
route.put('/delete/country', country.deleteCountry);

export default route;

