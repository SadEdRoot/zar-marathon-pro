/**
 * @jest-environment jsdom
 */
import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Heading from "./index";

describe('Heading',() => {
  let container: Element | null = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('should render', () => {
    act(() =>{
      render (<Heading size={1}/>, container);
    });
    expect(container?.innerHTML).toBeDefined();
  });

  it('should render with children', () => {
    act(() =>{
      render (<Heading size={1}>Title</Heading>, container);
    });
    expect(container?.textContent).toBe('Title');
  });

  it('should render with prop size 2', () => {
    act(() =>{
      render (<Heading size={2}>Title</Heading>, container);
    });
    expect(container?.querySelector('h2')).not.toBeNull();
  });
});
