import React from 'react';
import {shallow} from 'enzyme';

import movies from '../../mocks/movie';
import {DetailsPage} from '../../pages/DetailsPage';

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
    const match = {
      params: {
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
      history={historyMock}
      match={match}/>
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

  it('requests again when the location changed', () => {
    locationCallback({pathname: '/film/2'});

    expect(startMovieRequestMock).toHaveBeenCalledWith(2);
  });
});