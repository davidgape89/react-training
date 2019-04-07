import React from 'react';
import {shallow} from 'enzyme';

import movies from '../../mocks/movie';
import {SearchPage} from '../../pages/SearchPage';

describe('SearchPage -', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchPage movies={movies}/>);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});