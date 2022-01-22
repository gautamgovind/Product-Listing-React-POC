import React from 'react';
import { shallow } from "enzyme";

import Header from "../index";

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => (['M']),
  })); 

describe('<Header />', function () {
 
  it('renders without crashing', function () {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

//   it('calls filterProductBySize when onchange is triggered on select', function () {
//     const wrapper = shallow(<Header />);
//     wrapper.find('select').simulate('change', {
//         target: {value: 'M'}
//     });
//   });
});