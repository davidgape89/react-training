import React from 'react';
import {shallow} from 'enzyme';

import {SearchHeader} from '../../components/SearchHeader';

describe('SearchHeader -', () => {
  let wrapper, routerMock;
  
  beforeEach(() => {
    routerMock = {
      query: {
        searchQuery: '',
        searchBy: 'title'
      },
      push: jest.fn(),
    };
    wrapper = shallow(<SearchHeader 
      router={routerMock}/>
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('changes the query correctly', () => {
    const mockEvent = {
      target: {
        value: 'newquery'
      }
    };
    wrapper.find('SearchBar').prop('onChange')(mockEvent);

    expect(wrapper.state('query')).toBe('newquery');
  });

  it('calls search function when enter is pressed', () => {
    const mockEvent = {
      key: 'Enter'
    };
    wrapper.find('SearchBar').prop('onKeyPress')(mockEvent);

    expect(routerMock.push).toHaveBeenCalled();
  });

  it('does not call search function when other keys are pressed', () => {
    const mockEvent = {
      key: 'j'
    };
    wrapper.find('SearchBar').prop('onKeyPress')(mockEvent);

    expect(routerMock.push).not.toHaveBeenCalled();
  });

  it('changes search by correctly', () => {
    wrapper.find('SearchByToggle').prop('onChange')('genre');

    expect(wrapper.state('searchBy')).toBe('genre');
  });
});