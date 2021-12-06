import vh from '../helpers/index'
import userModal from '../models/User'
import bcrypt from 'bcrypt'

class UserController{
    async signup(req, res){
        try {  
       const  { error, value } = vh.userInfo(req.body);         //get error, and return validate values as user
            console.log(req.body)
        if(error) {
            return res.send({
                status: 400,
                error: error.details[0].message
            });
        }

        const isEmailExist = await userModal.findOne({email: req.body.email});
        if(isEmailExist){
            return res.send({
             status:403,
             message: 'Ooops, Email already taken'
            });
        }else{
           
           // const password = await bcrypt.hashSync(req.body.password, 10);
            const user = new userModal(req.body)
            /*const user = new userModal({
                ...req.body,
                [password]: password
            }) */
            console.log(req.body)
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
        console.log('invoked')
        return res.send({msg: 'class routes works'})
    }
}
const user = new UserController()
export default user;