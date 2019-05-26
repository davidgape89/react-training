import React from 'react';
import { shallow } from 'enzyme';

import movies from '../../mocks/movie';
import { SearchPage } from '../../pages/index';

describe('SearchPage -', () => {
  let wrapper;
  let startMoviesRequestMock;

  beforeEach(() => {
    const routerMock = {
      query: {
        searchQuery: 'searchquery',
      },
    };
    startMoviesRequestMock = jest.fn();
    wrapper = shallow(<SearchPage
      movies={movies}
      startMoviesRequest={startMoviesRequestMock}
      router={routerMock}
    />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('requests movies correctly', () => {
    expect(startMoviesRequestMock).toHaveBeenCalledWith('searchquery', 'title');
  });
});
