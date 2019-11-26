import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const News = () => {
  return <p>К сожалению, новостей нет</p>
}

class BigApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Я компонент, BigApp</h1>
        <p className='red'>Компоненты можно вкладывать друг в друга.</p>
        <App />
        <News />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<BigApp />, document.getElementById('root'));
