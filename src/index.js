import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const myNews = [
  {
    id: 1,
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    id: 2,
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    id: 3,
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
    bigText: 'А евро опять выше 70.'
  },
  {
    id: 4,
    author: 'Гость',
    text: 'Бесплатно. Без смс, про рект, заходи - https://maxpfrontend.ru',
    bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
  }
]

const App = () => {
  return (
    <React.Fragment>
      <h3>Новости</h3>
      <TestInput />
      <News data={myNews} />
    </React.Fragment>
  )
}

class TestInput extends React.Component {
  state = {
    myValue: ''
  }

  handleInputChange = (e) => {
    this.setState({ myValue: e.currentTarget.value })
  }

  onBtnClickHandler = (e) => {
    alert(this.state.myValue);
  }

  render() {
    return (
      <React.Fragment>
        <input
          className='test-input'
          onChange={this.handleInputChange}
          value={this.state.myValue}
          placeholder='введите значение'
        />
        <button onClick={this.onBtnClickHandler}>Показать alert</button>
      </React.Fragment>
    )
  }
}

class Article extends React.Component {
  state = {
    visible: false
  }

  handleReadMoreClck = (e) => {
    e.preventDefault()
    this.setState({ visible: true })
  }

  render() {
    const { author, text, bigText } = this.props.data
    const { visible } = this.state

    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        {
          !visible && <a onClick={this.handleReadMoreClck} href='#' className='news__readmore'>Подробнее</a>
        }
        {
          visible && <p className="news__big-text">{bigText}</p>
        }
      </div>
    )
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired
  })
}

class News extends React.Component {
  state = {
    counter: 0
  }

  renderNews = () => {
    const { data } = this.props
    const { counter } = this.state
    let newsTemplate

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return (
          <Article data={item} key={item.id}/>
        )
      })
    } else {
      newsTemplate = <p>Нет новостей - комментировать нечего.</p>
    }

    return newsTemplate
  }

  render() {
    const { counter, data } = this.props

    return (
      <div className="news">
        {this.renderNews()}
        {
          data.length ? <strong className={'news__count'}>Всего новостей: {data.length}</strong> : null
        }
      </div>
    )
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired
}

ReactDOM.render(<App />, document.getElementById('root'));
