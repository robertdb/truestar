import { shallow } from "enzyme";
import React from "react";
import { Button } from "../Button";

describe("Button", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: find childrens
});
