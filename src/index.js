import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myNews = [
  {
    id: 1,
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    id: 2,
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    id: 3,
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
  },
  {
    id: 4,
    author: 'Гость',
    text: 'Бесплатно. Без смс, про рект, заходи - https://maxpfrontend.ru'
  }
]

const App = () => {
  return (
    <React.Fragment>
      <h3>News</h3>
      <News data={myNews} />
    </React.Fragment>
  )
}

class Article extends React.Component {
  render() {
    const { author, text } = this.props.item
    return (
      <div>
        <p className="news__author">{author}</p>
        <p className="news__text">{text}</p>
      </div>
    )
  }
}

class News extends React.Component {
  render() {
    const { data } = this.props
    let newsTemplate

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return (
          <Article item={item} key={item.id}/>
        )
      })
    } else {
      newsTemplate = <p>Нет новостей - комментировать нечего.</p>
    }

    return (
      <div className="news">
        {newsTemplate}
        {
          data.length ? <strong>Всего новостей: {data.length}</strong> : null
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
