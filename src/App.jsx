import './assets/styles/App.css'
import React from 'react'
import { AnswersList, Chats } from './components/index'
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

  initChats () {
    const initData = this.state.dataset[this.state.currentId]
    const chat = {
      type: 'question',
      text: initData.question
    }
    const chats = this.state.chats
    chats.push(chat)
    this.setState({
        chats: chats
      }
    )
  }

  componentDidMount () {
    this.initAnswer()
    this.initChats()
  }

  render () {
    return <section className="c-section">
      <div className="c-box">
        <Chats chats={this.state.chats}/>
        <AnswersList answers={this.state.answers}/>
      </div>
    </section>
  }
}
