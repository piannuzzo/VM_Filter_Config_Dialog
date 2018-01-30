import React, { Component, Fragment } from 'react';
import './FilterDialog.css';
import FilterControls from './FilterControls.js';
import contentImg from '../images/filterDialogContent.PNG';

class FilterDialog extends Component {

render = () => (
	<div className="FilterDialogContainer">
		<div className="FDHeaderContainer">
			<div className="FDHeaderContent">
				Filter Configuration
			</div>
		</div>
		<div className="FDControlsContainer">
			<FilterControls  filterList={this.props.filterList} accessLevelList={this.props.accessLevelList} />
		</div>
		<div className="FDContentOuterContainer">
			<div className="FDContentContainer">
				<img src={contentImg} />
			</div>
		</div>
		<div className="FDFooterContainer">
			<div className="FDFooterButtonsContainer">
				<div className="FDFooterButtonsLeft">
					<button>Clear</button>
					<button>Reset</button>
				</div>
				<div className="FDFooterButtonsRight">
					<button>Apply</button>
					<button>OK</button>
					<button>Cancel</button>
				</div>
			</div>
		</div>
	</div>
	);
};

export default FilterDialog;