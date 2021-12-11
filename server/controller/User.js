import vh from "../helpers/index";
import userModal from "../models/User";
import bcrypt from "bcrypt";

class UserController {
  async signup(req, res) {
    try {
      const { name, email, password, phone, dob, country} = req.body;
      
      const data = new userModal({
        name, email, password:bcrypt.hashSync(password, 10), phone, dob, country, creation: Date.now(), login:Date.now()
      });
      const newUser = await data.save();
      return res.send({ status:201,newUser });
    } catch (error) {
      return res.send({ status:500, error:error.message,data:req.body });
    }
  }
  async signin(req, res) {
    try {
      const { email, password } = req.body;
      const loggedUser = await userModal.findOne({ email: email });     
      if (!loggedUser) {
        return res.send({ message: "Invalid Email or Password " });
      } else {
        if (bcrypt.compareSync(password, loggedUser.password)) {         
          //TODO: retreive updated login datetime
          const updated = await userModal.findOneAndUpdate({email: req.body.email}, {login: Date.now()})
          const { _id, name, email, login } = loggedUser;
          return res.send({ _id, name, email, login });
        } else {
          return res.send({ message: "Invalid Credentials" });
        }
      }
    } catch (error) {
      return res.send({
        error: error.message,
        message: "Internal Server Error",
      });
    }
  }
}
const user = new UserController();
export default user;
