// ComponentName.test.js
import React from 'react';
import { shallow } from 'enzyme';
import VisitList from '../screens/VisitList';
import Visited from '../screens/Visited';
import { MyList } from '../screens/MyList';
import { CheckList } from '../screens/CheckList';

describe("render dashboard screens", () => {
  it("should render visit list  component without error", () => {
    const wrapper = shallow(<VisitList />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  it("should render visited component without error", () => {
    const wrapper = shallow(<Visited />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  it("should render My list  component without error", () => {
    const wrapper = shallow(<MyList />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  it("should render check list   without error", () => {
    const wrapper = shallow(<CheckList />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});