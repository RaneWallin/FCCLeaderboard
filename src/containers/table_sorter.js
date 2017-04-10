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
			className={"sorter " + ((this.props.activeSorter && this.props.activeSorter == this.props.which) ? "active" : "")}
			onClick={this.handleClick}>{this.props.title}</th>
		);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ sortCampers }, dispatch);
}

function mapStateToProps({ campers }) {
		return { activeSorter: campers.which };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSorter);