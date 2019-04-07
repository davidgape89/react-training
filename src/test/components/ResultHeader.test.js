import React from 'react';
import {shallow} from 'enzyme';

import {ResultHeader} from '../../components/ResultHeader';

describe('ResultHeader -', () => {
  let wrapper, callbackFun;

  beforeEach(() => {
    callbackFun = jest.fn();
    wrapper = shallow(<ResultHeader resultNumber={1}
                                    sortBy={'drama'}
                                    handleChange={callbackFun} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays movie in singular correctly', () => {
    const text = wrapper.find('div[className="result-header__number"]').text();

    expect(text).toBe('1 movie found');
  });

  it('displays movies in plural correctly', () => {
    wrapper.setProps({resultNumber: 2});
    const text = wrapper.find('div[className="result-header__number"]').text();

    expect(text).toBe('2 movies found');
  });

  it('calls the callback correctly', () => {
    wrapper.find('SortByToggle').prop('onChange')();

    expect(callbackFun).toHaveBeenCalled();
  })
});