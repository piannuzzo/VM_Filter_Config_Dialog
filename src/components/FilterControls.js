import React, { Component, Fragment } from 'react';
import './FilterControls.css';


class FilterControls extends Component {
	state = {
		modeSaveAs: false,
		saveAsButtonWidth: null
	};

	componentDidMount = () => {
		this.setState({saveAsButtonWidth: document.querySelector(".buttonContainer button").offsetWidth});
		this.setState({standardFilterSelected: document.getElementsByClassName("filterList")[0].value === "Standard"});
	};

	componentDidUpdate = () => {
		this.state.modeSaveAs && document.querySelector(".newFilterName").focus();
	};

	filterSelectionChange = (ev) => {
		this.setState({standardFilterSelected: ev.target.value === "Standard"});
	};

	toggleSaveAs = () => {
		this.setState({modeSaveAs: !this.state.modeSaveAs});
	};

	renderSaveMode = () => (
		<Fragment>
			<label><span>Name:</span>
				<select className="filterList" onChange={this.filterSelectionChange}>
					{this.props.filterList.map((obj, ix) => {
						return (
							<option key={ix} value={obj.desc}>
								{obj.desc}
								{obj.default && " (def.)"}
							</option>
						);
					})}
				</select>
			</label>
		</Fragment>
	);

	renderSaveAsMode = () => (
		<Fragment>
			<label><span>Name:</span><input className="newFilterName" type="text" /></label>
		</Fragment>
	);

	render = () => {
		let cssAccessList = {visibility: (this.state.modeSaveAs ? 'visible' : 'hidden')},
			cssButton = {width: this.state.saveAsButtonWidth ? `${this.state.saveAsButtonWidth}px` : ''};

		return (
			<div className="FilterControlsComponent">
				<div className="controlsLeft">
					{ this.state.modeSaveAs ? this.renderSaveAsMode() : this.renderSaveMode() }
					<a href="javascript:void(0);" onClick={this.toggleSaveAs}>{this.state.modeSaveAs ? 'Cancel new filter' : 'Save as new filter'}</a>
					<br />
					<label><span>Default:</span><input className="defaultCheckbox" type="checkbox" /></label>
					<br />
					<label style={cssAccessList}><span>Access:</span>
						<select className="accessLevelList">
							{this.props.accessLevelList.map((obj, ix) => <option key={ix} value={obj.desc}>{obj.desc}</option> )}
						</select>
					</label>
				</div>
				<div className="controlsRight">
					<div className="buttonContainer">
						<button disabled={!this.state.modeSaveAs && this.state.standardFilterSelected ? "disabled" : ""}>Save</button>
						<button disabled={this.state.modeSaveAs || this.state.standardFilterSelected ? "disabled" : ""}>Delete</button>
					</div>
				</div>
			</div>
		);
	};
};

export default FilterControls;