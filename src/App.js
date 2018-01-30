import React, { Component } from 'react';
import FilterDialog from './components/FilterDialog.js';
//import FilterControls from './components/FilterControls.js';
import './App.css';
import filterList from './data/filterList.json';
import accessLevelList from './data/accessLevels.json';

class App extends Component {
	state = {
		modeSaveAs: false
	};
	toggleSaveAs = () => {
		this.setState({modeSaveAs: !this.state.modeSaveAs})
	};
	render = () => (
		<div className="App">
			<FilterDialog filterList={filterList} accessLevelList={accessLevelList} />
		</div>
	);
}

export default App;
