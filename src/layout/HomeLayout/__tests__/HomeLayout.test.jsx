import { shallow } from "enzyme";
import React from "react";
import { HomeLayout } from "../HomeLayout";

describe("Home Layout", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<HomeLayout />);

    expect(wrapper.exists()).toBe(true);
  });
});
