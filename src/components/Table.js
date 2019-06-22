import React, { Component } from 'react';
import Elements from '../Periodic-table.js';
import ElementsMK from '../Periodic-TableMK.js';
import Element from './Element';
import Search from './Search';

class Table extends Component {

	url = React.createRef();

	constructor(){
		super();
		this.state = {
			elements: Elements,
			elementsMK: ElementsMK,
			search: false,
			iframeDiv: false
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

  	rowInfo = (e) => {
  		document.querySelector('.wikipedia').src = `${e.currentTarget.getAttribute( 'dataattr' )}`;
  		this.setState({ iframeDiv: true });
  	}

  	rowClose = (e) => {
  		e.preventDefault();
  		this.setState({ iframeDiv: false });
  	}

	

	render() {


		return (
			<div className={`Table ${this.state.search && 'fade'}`}>
				<div className={this.state.iframeDiv ? 'iframe iopen' : 'iframe'}>
						<a onClick={this.rowClose} href="/">&times;</a>
						<iframe 
							className='wikipedia' 
							src="https://en.wikipedia.org/wiki/Alkali_metal" 
							title="iframe" 
							frameBorder="10" 
							height="500px" 
							width="1100px"
							overflow-y="scroll"
							overflow-x="hidden"
						>
								 <p>{this.props.lang ? 'Your browser does not support iframes.' : 'Вашиот прелистувач не поддржува iframes.'}</p>
						</iframe>
				</div>
				<Search lang={this.props.lang} toggleSearch={this.toggleSearch} goBack={this.goBack} search={`overlay ${this.state.search && 'open'}`} />
					<div className="topTable">
						<h1>{this.props.lang ? 'Periodic Table of Elements' : 'Периодна табела на елементите'}</h1>
					<div className="Legend">
						<h2>{this.props.lang ? "Legend" : "Легенда"}</h2>
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
					<label dataattr='https://en.wikipedia.org/wiki/Alkali_metal' onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
							
						}
					</div>
					<div className="Row r2">
					<label dataattr='https://en.wikipedia.org/wiki/Alkaline_earth_metal' onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r3">
					<label dataattr="https://en.wikipedia.org/wiki/Group_3_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r4">
					<label dataattr="https://en.wikipedia.org/wiki/Group_4_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r5">
					<label dataattr="https://en.wikipedia.org/wiki/Group_5_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r6">
					<label dataattr="https://en.wikipedia.org/wiki/Group_6_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r7">
					<label dataattr="https://en.wikipedia.org/wiki/Group_7_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r8">
					<label dataattr="https://en.wikipedia.org/wiki/Group_8_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r9">
					<label dataattr="https://en.wikipedia.org/wiki/Group_9_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r10">
					<label dataattr="https://en.wikipedia.org/wiki/Group_10_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r11">
						<label dataattr="https://en.wikipedia.org/wiki/Group_11_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r12">
					<label dataattr="https://en.wikipedia.org/wiki/Group_12_element" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r13">
					<label dataattr="https://en.wikipedia.org/wiki/Boron_group" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r14">
					<label dataattr="https://en.wikipedia.org/wiki/Carbon_group" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r15">
					<label dataattr="https://en.wikipedia.org/wiki/Pnictogen" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r16">
					<label dataattr="https://en.wikipedia.org/wiki/Chalcogen" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r17">
					<label dataattr="https://en.wikipedia.org/wiki/Halogen" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
										/>	
								})
						}
					</div>
					<div className="Row r18">
					<label dataattr="https://en.wikipedia.org/wiki/Noble_gas" onClick={this.rowInfo}>
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
											i={el.number}
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
											i={el.number}
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
											i={el.number}
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
											i={el.number}
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
											i={el.number}
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
											i={el.number}
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
