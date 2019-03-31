import React from 'react';
import {shallow} from 'enzyme';

import movies from '../../mocks/movie';
import MovieList from '../../components/MovieList';

describe('MovieList -', () => {
  let wrapper, callbackFun;

  beforeEach(() => {
    callbackFun = jest.fn();
    wrapper = shallow(<MovieList movies={movies} 
                                 onPageChange={callbackFun} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls the callback when the children component does', () => {
    wrapper.find('MoviePoster')
           .first()
           .prop('onPageChange')();

    expect(callbackFun).toHaveBeenCalled();
  })
});