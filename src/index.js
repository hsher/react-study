import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
    <React.Fragment>
      <News />
      <Comments />
    </React.Fragment>
  )
}

const Comments = () => {
  return <div>Нет новостей - комментировать нечего.</div>
}

const News = () => {
  return <p>К сожалению, новостей нет</p>
}

ReactDOM.render(<App />, document.getElementById('root'));
