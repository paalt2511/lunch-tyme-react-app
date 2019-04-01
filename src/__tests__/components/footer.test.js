import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../components/Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
    it('renders <Footer /> components', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('footer').length).toBe(1);
    });
});