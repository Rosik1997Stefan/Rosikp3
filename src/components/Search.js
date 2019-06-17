import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Elements from '../Periodic-table.js';

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
			searched: []
		}
	}

	onChange = (e) => {
		const value = e.currentTarget.value.toLowerCase();
		if(value.length === 0){
			this.setState({ searched: null });
			return false;
		}
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
	}

	render() {
		return (
			<div className="Search">
				<div className={`overlay ${this.props.search}`}>
    				<input type="text" onChange={this.onChange} />
    				<a href="/" className="times" onClick={this.props.goBack}>&times;</a>
    				<br />
    				<br />
    						{
	    						this.state.searched !== null ?
	    						this.state.searched.map(el => {
	    							return <Link key={el.name} to={`/${el.name}`} className="filteredA">{ el.symbol } </Link>
	    						})
	    						: 
	    						null
    						}
    						{
	    						this.state.searched !== null ?
	    						this.state.searched.map(el => {
	    							return <Link key={el.name} to={`/${el.name}`} className="filteredA">{ el.name } </Link>
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
