import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortCampers } from '../actions/index';
import SORT_CAMPERS from '../actions/index';


class TableSorter extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.sortCampers(this.props.which);
	}

	render () {
		return (
			<th 
			className='sorter'
			onClick={this.handleClick}>{this.props.title}</th>
		);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ sortCampers }, dispatch);
}

export default connect(null, mapDispatchToProps)(TableSorter);