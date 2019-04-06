import React from 'react';
import {shallow} from 'enzyme';

import SearchPage from '../../pages/SearchPage';

describe('SearchPage -', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchPage />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('changes sort by correctly', () => {
    wrapper.find('ResultHeader').prop('onChange')('rating');

    expect(wrapper.state('sortBy')).toEqual('rating');
  });
});