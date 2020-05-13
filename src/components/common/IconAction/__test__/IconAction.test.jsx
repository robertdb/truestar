import { shallow } from "enzyme";
import React from "react";
import { IconAction } from "../IconAction";

describe("IconButton", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<IconAction />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: find childrens
});
