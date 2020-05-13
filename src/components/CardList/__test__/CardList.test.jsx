import { shallow } from "enzyme";
import React from "react";
import { CardListBase } from "../CardList";

describe("Detail Card", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CardListBase posts={[]} />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: find childrens
});
