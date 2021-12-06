import express from 'express';
import user  from '../controller/User'
import country  from '../controller/Country'

const route = express();

route.get('/', user.test)
route.post('/signup', user.signup);
route.post('/signup', (req, res) => {
    return res.send({data: req.body});
});
 route.post('/signin', user.signin);
route.get('/countries', country.getAll);
route.post('/add/country', country.addCountry);
route.put('/update/country', country.addCountry);

export default route;

