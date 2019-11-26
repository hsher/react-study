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
      <News data={myNews} />
    </React.Fragment>
  )
}

class News extends React.Component {
  render() {
    const { data } = this.props
    let newsTemplate

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return (
          <div key={item.id}>
            <p className="news__author">{item.author}</p>
            <p className="news__text">{item.text}</p>
          </div>
        )
      })
    } else {
      newsTemplate = <p>Нет новостей - комментировать нечего.</p>
    }

    return (
      <div className="news">
        {newsTemplate}
        <strong className={data.length > 0 ? '' : 'none'}>Всего новостей: {data.length}</strong>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
