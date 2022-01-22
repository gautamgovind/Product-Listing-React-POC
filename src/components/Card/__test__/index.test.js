import React from 'react';
import { shallow } from "enzyme";
import Card from "../index";

describe('<Card />', function () {
    const product = {
            index: 0,
            isSale: true,
            isExclusive: true,
            price: "$18.88",
            productName: "Striped shirt",
            size: [ "XS", "S", "L", "XL" ]
    };
  it('renders without crashing', function () {
    const wrapper = shallow(<Card product={product} />);
    expect(wrapper).toMatchSnapshot();
  });
});