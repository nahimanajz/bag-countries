import validator from '../helpers/index'
import userModal from '../models/index'
import bcrypt from 'bcrypt'

class UserController{
    async signup(req, res){
        const  { error } = validator.userInfo(req.body);
        if(error) {
            return res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
        }
        try {          
        const isEmailExist = await userModal.findOne({email: req.body.email});
        if(isEmailExist){
            return res.status(403).json({
             message: 'Ooops, Email already taken'
            });
        }else{
            const user = new userModal(...req.body,{
                password: await bcrypt.hashSync(req.body.password, 10)
            })
            const newUser = await user.save();
             return newUser ? res.status(200).json({user:newUser,}) : res.status(404).json({message: 'invalid user data'});

        }
        }  catch (error) {
            return res.status(400).json({
              status: 400,
              error: error,
              
          });
          }

    }
    async signin(req, res){
        try {
            const { email, password } = req.body;        
            const loggedUser = await userModal.findOne({email: email});  
            
             if(!loggedUser){
                return res.status(404).json({ message: 'Invalid Email or Password ' })
             } else {
                    if(bcrypt.compareSync(password, loggedUser.password)) {
                        const {_id, name, email} = loggedUser;
                        return res.status(200).json({ _id, name,email});
                    }else {
                        return res.status(404).json({message: 'Invalid Credentials'});
                    }
             }
       } catch (error) {     
            return res.status(500).json({error: error.message, message:"Internal Server Error"});
       }  
      
    }
    async test(req, res){
        return res.send({msg: 'class routes works'})
    }
}
const user = new UserController()
export default user;