import React from 'react';
import { shallow } from "enzyme";

import ProductListing from "../index";

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => ([ {
        index: 0,
        isSale: true,
        isExclusive: true,
        price: "$18.88",
        productName: "Striped shirt",
        size: [ "XS", "S", "L", "XL" ]
    }]),
  })); 

describe('<ProductListing />', function () {
 
  it('renders without crashing', function () {
    const wrapper = shallow(<ProductListing />);
    expect(wrapper).toMatchSnapshot();
  });
});