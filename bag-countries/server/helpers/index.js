import joi from "joi";
class ValidateHelper {
    userInfo(data){
        const User = {            
            email: joi.string().email().required(),
            phone: joi.number().required(),
            name: joi.string().required(),
            dob: joi.date.required(),
            country: joi.string().required(),
            password: joi.string(),        
           
        }
        return joi.validate(data, User);
    }
    

}
export default new ValidateHelper();