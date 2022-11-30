import React from 'react'
import Question from './Question.jsx'

export default class QuestionList extends React.Component {
  render() {
    return (
      <div>
        <h1>IMY 220 - Questions</h1>
        {
            this.props.questions.map((question, i) => <Question key={i} {...question} />)
        }
      </div>
    )
  }
}
