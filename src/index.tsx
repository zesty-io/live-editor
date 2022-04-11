// export * from './components/ZestyExplorer';
import React from 'react';
import ReactDOM from 'react-dom';
import { ZestyExplorer } from './components/ZestyExplorer';
import { canUseDOM } from './utils';

const main = () => {
  if (!canUseDOM()) {
    return null;
  }
  document.body.innerHTML += '<div id="zesty-explorer"></div>';
  return ReactDOM.render(
    <ZestyExplorer />,
    document.getElementById('zesty-explorer')
  );
};

main();
