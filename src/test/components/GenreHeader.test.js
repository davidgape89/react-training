import React from 'react';
import {shallow} from 'enzyme';

import GenreHeader from '../../components/GenreHeader';

describe('GenreHeader -', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GenreHeader genre="drama"/>);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
});