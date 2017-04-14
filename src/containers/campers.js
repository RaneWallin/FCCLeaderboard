import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampers } from '../actions/index';
import { bindActionCreators } from 'redux';
import FETCH_CAMPERS from '../actions/index';
import TableSorter from './table_sorter';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Campers extends Component {

	componentDidMount() {
		//console.log(FETCH_CAMPERS);
		this.props.fetchCampers();
	}

	renderCampers(campers) {
		const fccUrl = "https://www.freecodecamp.com/";
		if (!this.props.campers)
			return (
				<tr><td>Loading...</td></tr>
			);

		return campers.map((camper, i) => {
			return (
				<tr key={camper.username}>
					<td>{i + 1}</td>
					<td>
						<img className="camper-img" src={camper.img} />
						<a href={fccUrl+camper.username} target="_blank">{camper.username}</a>
					</td>
					<td>{camper.recent}</td>
					<td>{camper.alltime}</td>
				</tr>
			);
		});
	}

	render() {
		const transitionOptions = {
			transitionName: "fade",
			transitionEnterTimeout: 500,
			transitonLeaveTimeout: 500
		};
		return (
			<div className="table-div">
				<table className="table table-hover">
					 <thead>
				 		<tr>
				 		<th>#</th>
				 		<TableSorter title="Camper Name" which="username" />
				 		<TableSorter title="Points in past 30 days" which="recent" />
				 		<TableSorter title="All time points" which="alltime" />
				 		</tr>
					 </thead>
					 <tbody>
						{ this.renderCampers(this.props.campers) }
					</tbody>
				</table>
			</div>
		);
	}

}

function mapStateToProps({ campers }) {
	return { campers: campers.data };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCampers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Campers);
