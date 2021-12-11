import React from 'react';
import { shallow } from 'enzyme';
import { CountryDetail} from '../components/CountryDetail'
import { CountryFilter} from '../components/CountryFilter'
import { DesktopNav } from '../components/DesktopNav';
import { ListableCountry } from '../components/ListableCountry';
import { MobileMenu } from '../components/MobileMenu';
import SideMenus from '../components/SideMenus';

describe("Components different components", () => {
    it("should render country detail  component without error", () => {
      const wrapper = shallow(<CountryDetail />);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
    it("should render country filter component without error", () => {
        const wrapper = shallow(<CountryFilter />);
        expect(wrapper.getElements()).toMatchSnapshot();
      });
      it("should render  desktop nav  without error", () => {
        const wrapper = shallow(<DesktopNav />);
        expect(wrapper.getElements()).toMatchSnapshot();
      });
      it("should render  Listable countrywithout error", () => {
        const wrapper = shallow(<ListableCountry />);
        expect(wrapper.getElements()).toMatchSnapshot();
      });
      it("should render  Mobile Menu without error", () => {
        const wrapper = shallow(<MobileMenu />);
        expect(wrapper.getElements()).toMatchSnapshot();
      });
      it("should render  SideMenu without error", () => {
        const wrapper = shallow(<SideMenus />);
        expect(wrapper.getElements()).toMatchSnapshot();
      });
})