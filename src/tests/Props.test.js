const { shallow } = require("enzyme");
const { Signup } = require("../screens/Signup");

describe("Signup", ()=>{
    it('test sign up props', () => {  
        const props = {
            showDashboard: ()=>{}, 
            userInfo: {},
            },
        SignupWrapper = shallow(<Signup {...props} />).find('modal');
        expect(SignupWrapper.props().showDashboard).tobeFunction()
        expect(SignupWrapper.props().userInfo).toBeObject();
    });
})
