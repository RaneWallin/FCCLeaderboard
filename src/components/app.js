import React, { Component } from 'react';
import Campers from '../containers/campers';
import SiteHeader from './header';

export default class App extends Component {


  	render() {
    	return (
      	<div>
      		<SiteHeader />
      		<Campers />
      	</div>
    	);
  	}
}
