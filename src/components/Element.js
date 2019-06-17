import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Element = (props) => {
  const {symbol, name, atomicMass, number, shells, color, fontColor, i} = props;
  return (
    <Link to={`/${i}`} className={`Element ELEMENT${color} ${fontColor}`}>
    	<h3>{symbol}</h3>
    	<p>{name}</p>
    	<span>{atomicMass}</span>
    	<span>{number}</span>
    	<ul>
    		{shells.map((s, i)=> {return <li key={i}> {s} </li> })}
    	</ul>
    </Link>
  )
}

Element.propTypes = {
    symbol: PropTypes.string,
    name: PropTypes.string,
    atomicMass: PropTypes.number,
    number: PropTypes.number,
    shells: PropTypes.array,
    color: PropTypes.string,
    fontColor: PropTypes.string,
    i: PropTypes.string
}

export default Element;