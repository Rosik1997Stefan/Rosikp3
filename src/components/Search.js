import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Elements from '../Periodic-table.js';
import ElementsMK from '../Periodic-TableMK.js';

class Search extends Component {

	static propTypes = {
		search: PropTypes.string,
		goBack: PropTypes.func,
		toggleSearch: PropTypes.func
	}

	constructor(){
		super();
		this.state = {
			elements: Elements,
			ElementsMK: ElementsMK,
			searched: []
		}
	}

	onChange = (e) => {
		const value = e.currentTarget.value.toLowerCase();
		if(value.length === 0){
			this.setState({ searched: null });
			return false;
		}
		if(this.props.lang){
			const arr = this.state.elements.filter(function(el, i) {
			const symbol = el.symbol.toLowerCase();
			const name = el.name.toLowerCase();
			const subSymbol = symbol.substring(0, value.length);
			const subName = name.substring(0, value.length);
			if(subSymbol === value || subName === value ){
				return true;
			}

		});
			this.setState({ searched: arr })
		}else{
			const arr2 = this.state.ElementsMK.filter(function(el, i) {
			const symbol = el.symbol.toLowerCase();
			const name = el.name.toLowerCase();
			const subSymbol = symbol.substring(0, value.length);
			const subName = name.substring(0, value.length);
			if(subSymbol === value || subName === value ){
				return true;
			}
		});
			this.setState({ searched: arr2 })
		}
	}

	render() {
		return (
			<div className="Search">
				<div className={`overlay ${this.props.search}`}>
    				<input 
    					type="text" 
    					onChange={this.onChange} 
    					placeholder={this.props.lang ? 
    					"Type the symbol or the name of the element" : 'Внесете го симболот или името на елементот'} 
    				/>
    				<a href="/" className="times" onClick={this.props.goBack}>&times;</a>
    				<br />
    				<br />
    						{
	    						this.state.searched !== null ?
	    						this.state.searched.map(el => {
	    							return <Link key={el.name} to={`/${el.number}`} className="filteredA">{ el.symbol } </Link>
	    						})
	    						: 
	    						null
    						}
    						{
	    						this.state.searched !== null ?
	    						this.state.searched.map(el => {
	    							return <Link key={el.name} to={`/${el.number}`} className="filteredA">{ el.name } </Link>
	    						})
	    						: 
	    						null
    						}
    			</div>
    			<a href="/" onClick={this.props.toggleSearch}><i  className="fas fa-search s"></i></a>
    		</div>
		);
	}
}

export default Search;
