import * as React from 'react';
import ReactDOM from 'react-dom';
import { ZestyExplorer } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ZestyExplorer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
