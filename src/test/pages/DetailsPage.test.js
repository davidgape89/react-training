import React from 'react';
import {shallow} from 'enzyme';

import DetailsPage from '../../pages/DetailsPage';

describe('DetailsPage -', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DetailsPage />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});