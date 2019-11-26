import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myNews = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Без смс, про рект, заходи - https://maxpfrontend.ru'
  }
]

const App = () => {
  return (
    <React.Fragment>
      <News data={myNews} />
      <Comments />
    </React.Fragment>
  )
}

const Comments = () => {
  return <div>Нет новостей - комментировать нечего.</div>
}

class News extends React.Component {
  render() {
    const newsTemplate = this.props.data.map(function(item, index) {
      return (
        <div key={index}>
          <p className="news__author">{item.author}</p>
          <p className="news__text">{item.text}</p>
        </div>
      )
    })

    console.log(newsTemplate)

    return (
      <div className="news">
        {newsTemplate}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
