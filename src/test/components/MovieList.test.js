import React from 'react';
import {shallow} from 'enzyme';

import movies from '../../mocks/movie';
import MovieList from '../../components/MovieList';

describe('MovieList -', () => {
  let wrapper, callbackFun;

  beforeEach(() => {
    callbackFun = jest.fn();
    wrapper = shallow(<MovieList movies={movies} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});