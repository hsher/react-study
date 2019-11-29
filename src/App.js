import React from 'react';
import { News } from './components/News';
import { Add } from './components/Add';
import './App.css';

class App extends React.Component {
  state = {
    news: null,
    isLoading: false,
  };
  componentDidMount () {
    this.setState({ isLoading: true });
    fetch('http://localhost:3000/data/newsData.json')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => { // добавили задержку
          this.setState({ isLoading: false, news: data });
        }, 3000); // в три секунды
      });
  }
  handleAddNews = data => {
    const nextNews = [data, ...this.state.news];
    this.setState({ news: nextNews });
  };
  render () {
    const { news, isLoading } = this.state;

    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={news} />}
      </React.Fragment>
    );
  }
}

export default App;
