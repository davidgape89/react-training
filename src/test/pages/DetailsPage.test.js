import React from 'react';
import {shallow} from 'enzyme';

import movies from '../../mocks/movie';
import {DetailsPage} from '../../pages/DetailsPage';

describe('DetailsPage -', () => {
  let wrapper, mockFunc;

  beforeEach(() => {
    mockFunc = jest.fn();
    wrapper = shallow(<DetailsPage movie={movies[0]} suggestions={movies} startSuggestionsRequest={mockFunc}/>);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});