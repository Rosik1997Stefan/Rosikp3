import React, { Component } from 'react';
import Elements from '../Periodic-table.js';
import ElementsMK from '../Periodic-TableMK.js';
import Element from './Element';
import Search from './Search';


class Table extends Component {

	constructor(){
		super();
		this.state = {
			elements: Elements,
			elementsMK: ElementsMK,
			search: false
		}
	}


	toggleSearch = (e)=> {
	    e.preventDefault();
	    this.setState({ search: true })
 	 }

 	 goBack = (e) =>{
    	e.preventDefault();
    	this.setState({ search: false })
  	}




  	

	render() {

		return (
			<div className={`Table ${this.state.search && 'fade'}`}>
				<Search toggleSearch={this.toggleSearch} goBack={this.goBack} search={`overlay ${this.state.search && 'open'}`} />
					<div className="topTable">
						<h1>Periodic Table of Elements</h1>
					<div className="Legend">
						<h2>Legend</h2>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Alkali Metals' : 'Алкални метали'}</span>
						</div>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Akali Earth Metals' : 'Акали Земја метали'}</span>
						</div>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Transition Metals' : 'Транзициони метали'}</span>
						</div>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Lanthanides' : 'Лантаниди'}</span>
						</div>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Actinides' : 'Актиниди'}</span>
						</div>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Other Metals' : 'Други метали'}</span>
						</div>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Metalloids' : 'Металоиди'}</span>
						</div>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Non-Metals' : 'Неметали'}</span>
						</div>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Halogens' : 'Халогени'}</span>
						</div>
						<div className="legendField">
							<span className="legendName">{this.props.lang ? 'Noble Gases' : 'Благородни гасови'}</span>
						</div>
					</div>
					<div className="Row r1" >
					<label>
						1
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 1 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 1 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
							
						}
					</div>
					<div className="Row r2">
					<label>
						2
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 2 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 2 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r3">
					<label>
						3
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 3 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 3 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r4">
					<label>
						4
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 4 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 4 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r5">
					<label>
						5
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 5 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 5 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r6">
					<label>
						6
					</label>
						{
						this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 6 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 6 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r7">
					<label>
						7
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 7 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 7 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r8">
					<label>
						8
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 8 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 8 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r9">
					<label>
						9
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 9 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 9 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r10">
					<label>
						10
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 10 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 10 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r11">
						<label>
						11
						</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 11 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 11 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r12">
					<label>
						12
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 12 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 12 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r13">
					<label>
						13
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 13 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 13 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r14">
					<label>
						14
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 14 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 14 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r15">
					<label>
						15
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 15 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 15 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r16">
					<label>
						16
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 16 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 16 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r17">
					<label>
						17
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 17 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 17 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					<div className="Row r18">
					<label>
						18
					</label>
						{
							this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 18 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 18 &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
						}
					</div>
					</div>
					<div className="botTable">
						<div className="Line l1">
						<span className="l1Before">{this.props.lang ? 'Lanthanides' : `Лантханиди`}</span>
							{
								this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 'down' &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 'down' &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
							}
						</div>
						<div className="Line l2">
						<span className="l2Before">{this.props.lang ? 'Actinides' : 'Актиниди'}</span>
							{
								this.props.lang ? 
								this.state.elements.map(el => {
									return el.xpos === 'sdown' &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
								:
								this.state.elementsMK.map(el => {
									return el.xpos === 'sdown' &&
										<Element 
											symbol={el.symbol} 
											name={el.name} 
											atomicMass={el.atomic_mass} 
											number={el.number} 
											shells={el.shells}
											key={el.name}
											color={el.category.replace(' ', '-')}
											fontColor={el.color === null ? 'black' : 'white'}
											i={el.name}
										/>	
								})
							}
						</div>
					</div>
					

			</div>
		);
	}
}

export default Table;
