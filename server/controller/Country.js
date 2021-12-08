import country from '../models/Country'
class CountryController{
    async addCountry(req, res){
        try {   
             const newCountry = new country(req.body)
             const saveCountry = await newCountry.save()
            return res.send({status: 201, message: 'new country is added', saveCountry});
        } catch (error) {
            return res.send({status: 500, message:error.message});
        }
    }
    async updateCountry(req, res){
        try {
            const updateCountry = await country.findOneAndUpdate({name:req.body.name},{visiteStatus:'visited'})
            return res.send({status: 201, message: 'new country is changed to visted'});

        } catch (error) {
            return res.send({status: 500, message:error.message});
            
        }
    }
    async getAll(req, res){ 
     
        try {
            const countries = await country.find()
            return countries?res.send({status: 200,countries}):res.send({status: 200, message:'404 Not found '})

        } catch (error) {
            return res.send({status: 500, message:error.message});
            
        }
    }
    }
const countryController = new CountryController();
export default countryController;