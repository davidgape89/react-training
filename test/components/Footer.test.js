import React from 'react';
import {shallow} from 'enzyme';

import Footer from '../../components/Footer';

describe('Footer -', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  })

  it('renders correclty', () => {
    expect(wrapper).toMatchSnapshot();
  })
})