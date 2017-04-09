import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampers } from '../actions/index';
import { bindActionCreators } from 'redux';
import FETCH_CAMPERS from '../actions/index';

class Campers extends Component {

	componentDidMount() {
		//console.log(FETCH_CAMPERS);
		this.props.fetchCampers();
	}

	renderCampers(campers) {
		if (!this.props.campers)
			return "";

		return campers.map((camper, i) => {
			return (
				<tr key={camper.username}>
				<td>{i + 1}</td>
				<td>
				<img className="camper-img" src={camper.img} />
				{camper.username}
				</td>
				<td>{camper.recent}</td>
				<td>{camper.alltime}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<table className="table table-hover">
				 <thead>
			 		<tr>
			 		<th>#</th>
			 		<th>Camper Name</th>
			 		<th>Points in past 30 days</th>
			 		<th>All time points</th>
			 		</tr>
				 </thead>
				 <tbody>
					{ 
						this.renderCampers(this.props.campers) 
					}
				</tbody>
			</table>
		);
	}

}

function mapStateToProps({ campers }) {
	return { campers };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCampers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Campers);
