import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class BigApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Я компонент, BigApp</h1>
        <p className='red'>Компоненты можно вкладывать друг в друга.</p>
        <App />
      </div>
    )
  }
}

ReactDOM.render(<BigApp />, document.getElementById('root'));
