import './assets/styles/App.css'
import React from 'react'
import { AnswersList } from './components/index'
import dataset from './assets/dataset.json'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: dataset,
      open: false,
    }
  }

  initAnswer () {
    const initData = this.state.dataset[this.state.currentId]
    const initAnswer = initData.answers
    this.setState({
      answers: initAnswer
    })
  }

  componentDidMount () {
    this.initAnswer();
  }

  render () {
    return <section className="c-section">
      <div className="c-box">
        <AnswersList answers={this.state.answers}/>
      </div>
    </section>
  }
}
