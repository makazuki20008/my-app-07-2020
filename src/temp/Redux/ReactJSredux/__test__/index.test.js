
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "../../../index";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Nội dung mà <App/> render ra trong đó
// Những nội dung là textContent có đúng như toBe hay không?
// Nếu đúng trả về "renders with or without name" true. 
// Nếu sai trả về "renders with or without name" false.
it("renders with or without a sort", () => {
  act(() => {    render(<App />, container);  });  expect(container.textContent).toBe("Order bySelectLowest to highestHighest to lowest 1");});