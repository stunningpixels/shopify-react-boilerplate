import React from 'react';
import ReactDOM from 'react-dom';
import Index from '~/templates/index';

const root = document.getElementById('root');

const test = ReactDOM.hydrate(<Index />, root); // eslint-disable-line
