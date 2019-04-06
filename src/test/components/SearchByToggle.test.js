import React from 'react';
import {shallow} from 'enzyme';

import SearchByToggle from '../../components/SearchByToggle';

describe('SearchByToggle -', () => {
  let wrapper, callbackFun;

  beforeEach(() => {
    callbackFun = jest.fn();
    wrapper = shallow(<SearchByToggle onChange={callbackFun}
                                      value="genre" />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('changes the selected button correctly', () => {
    wrapper.setProps({value: 'title'});
    const titleButton = wrapper.find('button').first();

    expect(titleButton.hasClass('button--red')).toBe(true);
  });

  it('calls the callback on title correctly', () => {
    wrapper.find('button')
           .first()
           .simulate('click');

    expect(callbackFun).toHaveBeenCalled();
  });

  it('calls the callback on genre correctly', () => {
    wrapper.find('button')
           .at(1)
           .simulate('click');

    expect(callbackFun).toHaveBeenCalled();
  });
});