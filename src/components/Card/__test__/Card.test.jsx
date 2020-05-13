import { shallow } from "enzyme";
import React from "react";
import { CardBase } from "../Card";

describe("Card", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CardBase />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: tests actions and handle functions
  //TODO: find childrens
});
