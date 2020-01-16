import * as React from 'react';
import * as ReactDom from 'react-dom';
import Router from './Router';

import './assets/styles/main.scss';

declare var document: Document;

ReactDom.render(
  <Router />,
  document.getElementById('root'),
);
