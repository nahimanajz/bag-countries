import Joi from "joi";
class ValidateHelper {
    userInfo(data){
        const schema =Joi.object({            
            email: Joi.string().email().required(),
            phone: Joi.number().required(),
            name: Joi.string().required(),
            dob: Joi.date().required(),
            country: Joi.string().required(),
            password: Joi.required().string(),        
           
        })
        return schema.validate(data);
    }
    

}
const vh = new ValidateHelper();
export default vh ;