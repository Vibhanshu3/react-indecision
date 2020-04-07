// import './utils.js';
// import subNum, {sq, add} from './utils.js'; //order does not matter (named export)

// console.log("app is runnning");
// console.log(sq(2));
// console.log(add(1, 2));
// console.log(subNum(2, 3));

// import validator from 'validator'; //default
// console.log(validator.isEmail('TEST@tese.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; //all browsers start from same page
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));

