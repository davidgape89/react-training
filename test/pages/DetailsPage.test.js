import React from 'react';
import {shallow} from 'enzyme';

import movies from '../../mocks/movie';
import {DetailsPage} from '../../pages/film';

describe('DetailsPage -', () => {
  let wrapper, 
      startSuggestionRequestMock, 
      startMovieRequestMock, 
      locationCallback;
  beforeEach(() => {
    global.scrollTo = jest.fn();
    const historyMock = {
      listen: (fn) => locationCallback = fn
    };
    const routerMock = {
      query: {
        id: 1
      }
    };
    startSuggestionRequestMock = jest.fn();
    startMovieRequestMock = jest.fn();
    startMovieRequestMock.mockReturnValue(new Promise(resolve => resolve(movies[0])));
    wrapper = shallow(<DetailsPage 
      movie={movies[0]}
      suggestions={movies}
      startMovieRequest={startMovieRequestMock} 
      startSuggestionsRequest={startSuggestionRequestMock} 
      router={routerMock}/>
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('requests the movie', () => {
    expect(startMovieRequestMock).toHaveBeenCalledWith(1);
  });

  it('requests suggestions when the movie has been received', () => {
    expect(startSuggestionRequestMock).toHaveBeenCalledWith(movies[0].genres[0]);
  });
});