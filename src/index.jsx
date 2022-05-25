import { h, render } from 'preact';

import App from './App';

import './styles/global.css';

const $root = document.getElementById('root');

render(<App />, $root);
