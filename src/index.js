import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import chromeBoi from './data.js'
import Matrix from './Matrix.js'
// const arr = chromeBoi.slice(0, 10)
ReactDOM.render(<Matrix values={chromeBoi} />, document.getElementById('root'));
