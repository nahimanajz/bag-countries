import Joi from "joi";
class ValidateHelper {
    userInfo(data){
        const schema = Joi.object({            
            email: Joi.unique().required(),
            phone: Joi.number().required(),
            name: Joi.required(),
            dob: Joi.date().required(),
            country: Joi.required(),
            password: Joi.required(),        
           
        })
        return schema.validate(data);
    }
    

}
const vh = new ValidateHelper();
export default vh ;