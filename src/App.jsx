import './assets/styles/App.css';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: {},
      open: false,
    };
  }
  render() {
    return <section className="c-section">
      <div className="c-box"></div>
    </section>;
  }
}
