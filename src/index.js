import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from "react-hot-loader/root";
import styles from './style/index.scss';

const App = hot(() => (
  <div>
    App here
  </div>
));

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
