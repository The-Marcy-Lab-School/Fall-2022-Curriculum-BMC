import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ClassBasedForm from './components/ClassBasedForm';
import Logo from './assets/marcy_lab_log.jpg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<img src={Logo} alt="marcy lab log" width="200" />
				<Container>
					<ClassBasedForm />
				</Container>
			</div>
		);
	}
}

export default App;
