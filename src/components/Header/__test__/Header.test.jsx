import { shallow } from "enzyme";
import React from "react";
import { HeaderBase } from "../Header";

describe("HeaderBase", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<HeaderBase favorites={[]} selected={[]} />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: find childrens
});
