/**
 * @jest-environment jsdom
 */

import React from 'react';
import pretty from 'pretty';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from './index';

describe('Button', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = document.createElement('div');
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
    const onChange = jest.fn();
    act(() => {
      render(<Button onClick={onChange}>Кнопка</Button>, container);
    });

    expect(pretty(container?.innerHTML as string)).toMatchInlineSnapshot(
      `"<button type=\\"button\\" class=\\"root root--green root--normal\\">Кнопка</button>"`,
    );

    expect(container?.innerHTML).toBeDefined();

    const button: Element | null = document.querySelector('button');

    expect(button?.innerHTML).toBe('Кнопка');

    act(() => {
      // @ts-ignore
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
