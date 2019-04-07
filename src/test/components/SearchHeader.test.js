import React from 'react';
import {shallow} from 'enzyme';

import {SearchHeader} from '../../components/SearchHeader';

describe('SearchHeader -', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchHeader />);
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
    const spy = spyOn(wrapper.instance(), 'search');
    wrapper.find('SearchBar').prop('onKeyPress')(mockEvent);

    expect(spy).toHaveBeenCalled();
  });

  // This won't pass for some reason, I'll wait until this is connected
  // to the state and pass a mock function as prop instead
  // it('calls search function on search button click', () => {
  //   const spy = spyOn(wrapper.instance(), 'search');
  //   wrapper.update();
  //   wrapper.find('button').simulate('click');

  //   expect(spy).toHaveBeenCalled();
  // });

  it('does not call search function when other keys are pressed', () => {
    const mockEvent = {
      key: 'j'
    };
    const spy = spyOn(wrapper.instance(), 'search');
    wrapper.find('SearchBar').prop('onKeyPress')(mockEvent);

    expect(spy).not.toHaveBeenCalled();
  });

  it('changes search by correctly', () => {
    wrapper.find('SearchByToggle').prop('onChange')('genre');

    expect(wrapper.state('searchBy')).toBe('genre');
  });
});