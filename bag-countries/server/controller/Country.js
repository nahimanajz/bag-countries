import country from '../models/Country'
class CountryController{
    async addCountry(req, res){
        try {   
             const newCountry = await country.save(req.body)
            return res.send({status: 201, message: 'new country is added'});
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
            const data = await country.find({}).then(res=>{
                console.log(res)
            }).catch(error=>console.log(error));
            return data?res.setStatus(200).send({status: 200,data}):res.sendStatus(200).send({status: 200, message:'404 Not found '})

        } catch (error) {
            return res.send({status: 500, message:error.message});
            
        }
    }
    }
const countryController = new CountryController();
export default countryController;