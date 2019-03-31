import React from 'react';
import {shallow} from 'enzyme';

import movies from '../../mocks/movie';
import MoviePoster from '../../components/MoviePoster';

describe('MovieList -', () => {
  let wrapper, callbackFun;

  beforeEach(() => {
    callbackFun = jest.fn();
    wrapper = shallow(<MoviePoster title={movies[0].title}
                                   genres={movies[0].genres}
                                   releaseDate={movies[0].release_date}
                                   posterUrl={movies[0].poster_url}
                                   onPageChange={callbackFun} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls the callback when the children component does', () => {
    wrapper.find('div.movie-poster')
           .simulate('click');

    expect(callbackFun).toHaveBeenCalled();
  })
});