import React from 'react';
import {shallow} from 'enzyme';

import SearchBar from '../../components/SearchBar';

describe('SearchBar -', () => {
  let wrapper, changeFun, keyPressFun;

  beforeEach(() => {
    changeFun = jest.fn();
    keyPressFun = jest.fn();
    const defaultProps = {
      query: 'searchquery',
      onKeyPress: keyPressFun,
      onChange: changeFun,
      placeholder: 'placeholder',
    };
    wrapper = shallow(<SearchBar {...defaultProps} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls change callback correctly', () => {
    const mockEvent = {
      target: {
        value: 'mockValue'
      }
    }
    wrapper.find('input').simulate('change', mockEvent);

    expect(changeFun).toHaveBeenCalledWith(mockEvent);
  });

  it('calls keypress callback correctly', () => {
    const mockEvent = {
      key: 'Enter'
    }
    wrapper.find('input').simulate('keypress', mockEvent);

    expect(keyPressFun).toHaveBeenCalledWith(mockEvent);
  });
});