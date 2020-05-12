import { shallow } from "enzyme";
import React from "react";
import { CardList } from "../CardList";

describe("Detail Card", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CardList />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: find childrens
});
