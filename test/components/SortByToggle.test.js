import React from 'react';
import {shallow} from 'enzyme';

import SortByToggle from '../../components/SortByToggle';

describe('SortByToggle -', () => {
  let wrapper, changeFun;

  beforeEach(() => {
    changeFun = jest.fn();
    const defaultProps = {
      sortBy: 'rating',
      onChange: changeFun,
    };
    wrapper = shallow(<SortByToggle {...defaultProps} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls change callback correctly', () => {
    wrapper.find('[id="release-date-button"]').simulate('click');

    expect(changeFun).toHaveBeenCalledWith('release_date');
  });

  it('calls change callback correctly', () => {
    wrapper.find('[id="rating-button"]').simulate('click');

    expect(changeFun).toHaveBeenCalledWith('rating');
  });
});