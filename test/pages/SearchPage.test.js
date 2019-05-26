import React from 'react';
import {shallow} from 'enzyme';

import movies from '../../mocks/movie';
import {SearchPage} from '../../pages/SearchPage';

describe('SearchPage -', () => {
  let wrapper,
      startSuggestionRequestMock, 
      startMoviesRequestMock, 
      locationMock,
      locationCallback;

  beforeEach(() => {
    const historyMock = {
      listen: (fn) => locationCallback = fn
    };
    const matchMock = {
      params: {
        query: 'searchquery'
      }
    };
    const locationMock = {
      search: '?searchBy=title'
    }
    startMoviesRequestMock = jest.fn();
    wrapper = shallow(<SearchPage movies={movies}
                                  startMoviesRequest={startMoviesRequestMock}
                                  location={locationMock}
                                  match={matchMock}
                                  history={historyMock}/>);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('requests movies correctly', () => {
    expect(startMoviesRequestMock).toHaveBeenCalledWith('searchquery', 'title');
  });

  it('requests movies when location changes', () => {
    locationCallback({pathname: '/search/searchquery2', search: '?searchBy=genre'});

    expect(startMoviesRequestMock).toHaveBeenCalledWith('searchquery2', 'genre');
  });
});