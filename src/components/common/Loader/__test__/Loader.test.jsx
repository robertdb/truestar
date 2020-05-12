import { shallow } from "enzyme";
import React from "react";
import { Loader } from "../Loader";

describe("Detail Card", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: find childrens
});
