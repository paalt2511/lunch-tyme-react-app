import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import { mount, shallow, configure } from "enzyme";
import expect from "expect";

import App from "./index";
import Header from "../../components/Header";

const mockStore = configureMockStore();
configure({ adapter: new Adapter() });

describe("<App/>", () => {
  let store;
  beforeEach(() => {
    store = configureMockStore()({
      list: {
        items: [],
        loading: true
      }
    });
  });

  describe("render()", () => {
    it("renders without crashing", () => {
      const component = shallow(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders header", () => {
      const component = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(component.find(Header)).to.have.lengthOf(1);
    });
  });
});
