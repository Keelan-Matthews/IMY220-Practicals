import React from 'react'

export default class Question extends React.Component {
    render() {
        return (
            <div id={this.props.name}>
                <h3>{this.props.question}</h3>
                <ul>
                    {
                    this.props.answers.map((answer, i) => <li key={i} data-correct={answer.correct}>{answer.answer}</li>)
                    }
                </ul>
            </div>
        )
    }
}