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

class App extends React.Component {
  state = {
    news: myNews
  }

  handleAddNews = (data) => {
    const nextNews = [data, ...this.state.news]

    this.setState({ news: nextNews })
    console.log('я вызвана из Add, но имею доступ к this.state у App!', this.state)
  }

  render() {
    return (
      <React.Fragment>
      <Add onAddNews={this.handleAddNews} />
      <h3>Новости</h3>
      <News data={this.state.news} />
    </React.Fragment>
    )
  }
}

class Add extends React.Component {
  state = {
    name: '',
    text: '',
    agree: false
  }

  onBtnClickHandler = (e) => {
    e.preventDefault()
    const { name, text } = this.state
    this.props.onAddNews({name, text})
  }

  handleChange = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: e.currentTarget.value })
  }

  handleCheckboxChange = (e) => {
    this.setState({ agree: e.currentTarget.checked })
  }

  validate = () => {
    const { name, text, agree } = this.state
    if (name.trim() && text.trim() && agree) {
      return true
    }
    return false
  }

  render() {
    const { name, text, agree } = this.state

    return (
      <form className='add'>
        <input
          id='name'
          type='text'
          className='add__author'
          placeholder='Ваше имя'
          value={name}
          onChange={this.handleChange}
        />
        <textarea
          id='text'
          className='add__text'
          placeholder='Текст новости'
          value={text}
          onChange={this.handleChange}
        ></textarea>
        <label className='add__checkrule'>
          <input
            type='checkbox'
            onChange={this.handleCheckboxChange}
          />
          Я согласен с правилами
        </label>
        <button
          className='add__btn'
          onClick={this.onBtnClickHandler}
          disabled={!this.validate()}
        >
          Показать alert
        </button>
      </form>
    )
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired
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
