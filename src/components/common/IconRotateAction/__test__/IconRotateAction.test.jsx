import { shallow } from "enzyme";
import React from "react";
import { IconRotateAction } from "../IconRotateAction";

describe("IconRotateAction", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<IconRotateAction />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: find childrens
});
