import React from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import io from 'socket.io-client';
import QuestionList from './components/QuestionList.jsx';

const socket = io.connect('http://localhost:3000');
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: []
		};
	}
	
	componentDidMount() {
		socket.on('questions', (questions) => {
			this.setState({questions: questions});
		});
	}

	render() {
		return (
			<div className="container">
				<QuestionList questions={this.state.questions} />
			</div>
		);
	}
}

createRoot(document.getElementById('root')).render(<Index />);

