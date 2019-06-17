import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Elements from '../Periodic-table.js';
import ElementsMK from '../Periodic-TableMK.js';

class SingleElement extends Component {

	static propTypes = {
		match: PropTypes.object
	}

	constructor(props) {
		super(props);
		this.state = {
			elements: Elements,
			elementsMK: ElementsMK,
		}
	}


	render() { 

			const {elements, elementsMK} = this.state;
			let element = null; 
			if(this.props.lang){
				if(this.state.elements !== null){
				 	element = elements.filter(el =>  el.name === this.props.match.params.name)
				}
			}else{
				if(this.state.elementsMK !== null){
				 	element = elementsMK.filter(el =>  el.name === this.props.match.params.name);
				}
			}

		return (
			<div className="SingleElement">
				<div className="topLeft">
					<div className="elementInformation">
						<h1>{element[0].symbol}</h1>
						<h2>{element[0].number}</h2>
						<h3>{element[0].atomic_mass.toFixed(3)}</h3>
						<ul>
							{
								element[0].shells.map((el, i)=> {
									return <li key={i}>{el}</li>
								})
							}
						</ul>
					</div>
					<h2>{element[0].name}</h2>
					<ul className="informations">
						<li>
							<span>{this.props.lang ? 'Atomic Weight' : 'Атомска тежина'}</span> <i className="fas fa-square"></i> {element[0].atomic_mass.toFixed(2)}
						</li>
						<li>
							<span>{this.props.lang ? 'Density' : 'Густина'}</span> <i className="fas fa-square"></i> {element[0].density.toFixed(2)} g/cm3
						</li>
						<li>
							<span>{this.props.lang ? 'Melting Point' : 'Точка на топење'}</span> <i className="fas fa-square"></i> {element[0].melt ? element[0].melt.toFixed(2) : this.props.lang ? 'unknown' : 'непознато'} &deg;C
						</li>
						<li>
							<span>{this.props.lang ? 'Boiling Point' : 'Точка на вриење'}</span> <i className="fas fa-square"></i> {element[0].boil ? element[0].boil.toFixed(2) : this.props.lang ? 'unknown' : 'непознато'} &deg;C
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SingleElement;
