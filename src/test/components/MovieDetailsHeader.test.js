import React from 'react';
import {shallow} from 'enzyme';

import MovieDetailsHeader from '../../components/MovieDetailsHeader';

describe('MovieDetailsHeader -', () => {
  let wrapper, mockFun;

  beforeEach(() => {
    mockFun = jest.fn();
    const defaultProps = {
      title: 'test title',
      genres: ['Drama', 'Action'],
      releaseDate: '2009-12-1',
      posterUrl: 'http://someurl.com/image.jpg',
      voteAverage: 5,
      overview: 'This is a very nice movie',
      onPageChange: mockFun,
    }
    wrapper = shallow(<MovieDetailsHeader {...defaultProps} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});