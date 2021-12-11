import React from 'react';
import { shallow } from 'enzyme';
import Home from '../screens/Home';
import { Signup } from '../screens/Signup';
import Signin from '../screens/Signin';

describe("render dashboard screens", () => {
    it("should render home component without error", () => {
      const wrapper = shallow(<Home />);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
    it("should render Signup component without error", () => {
      const wrapper = shallow(<Signup />);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
    it("should render Signin component without error", () => {
      const wrapper = shallow(<Signin />);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
    
  });