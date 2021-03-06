import React from 'react';
import {shallow} from 'enzyme';

import movies from '../../mocks/movie';
import MoviePoster from '../../components/MoviePoster';

describe('MoviePoster -', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoviePoster title={movies[0].title}
                                   genres={movies[0].genres}
                                   releaseDate={movies[0].release_date}
                                   posterUrl={movies[0].poster_url} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});