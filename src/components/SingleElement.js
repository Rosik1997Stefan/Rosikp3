import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Elements from '../Periodic-table.js';
import ElementsMK from '../Periodic-TableMK.js';
import {Link} from 'react-router-dom';
import Slider from "react-slick";


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

			var settings = {
		      infinite: true,
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      autoplay: true,
		      speed: 2000,
		      autoplaySpeed: 2500,
		      cssEase: "linear"
		    };

			const {elements, elementsMK} = this.state;
			let element; 
			if(this.props.lang){
				if(elements !== undefined){
				 	element = elements.filter(el =>  el.number === parseInt(this.props.match.params.number))
				}
			}else{
				if(elementsMK !== undefined){
				 	element = elementsMK.filter(el =>  el.number === parseInt(this.props.match.params.number));
				}
			}

		return (
			<div className="SingleElement">
			<div className="back">
				<Link to="/"><i className="fas fa-times"></i></Link>
			</div>
				<div className="topLeft">
					<div className="elementInformation">
						<h1>{element[0].symbol}</h1>
						<h2>{element[0].number}</h2>
						<h3>{element[0].atomic_mass !== null ? element[0].atomic_mass.toFixed(3) : this.props.lang ? 'unknown' : 'непознато' }</h3>
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
							<span>{this.props.lang ? 'Density' : 'Густина'}</span> <i className="fas fa-square"></i> {element[0].density ? element[0].density.toFixed(2) : this.props.lang ? 'unknown' : 'непознато'} g/cm3
						</li>
						<li>
							<span>{this.props.lang ? 'Melting Point' : 'Точка на топење'}</span> <i className="fas fa-square"></i> {element[0].melt ? element[0].melt.toFixed(2) : this.props.lang ? 'unknown' : 'непознато'} &deg;C
						</li>
						<li>
							<span>{this.props.lang ? 'Boiling Point' : 'Точка на вриење'}</span> <i className="fas fa-square"></i> {element[0].boil ? element[0].boil.toFixed(2) : this.props.lang ? 'unknown' : 'непознато'} &deg;C
						</li>
					</ul>
					<div className="topRight">
						<div className="dots">
							<i className="fas fa-ellipsis-h"></i>
						</div>
						<p>{element[0].summary}</p>
					</div>
				</div>
				<div className="leftBottom">
					<div className="leftSquare">
							<h1>{element[0].symbol}</h1>
					</div>
					<div className="rightSquare">
						<Slider {...settings}>
					        <div>
					          <h1>{element[0].symbol}</h1>
					        </div>
					        <div>
					          <h1>{element[0].symbol}</h1>
					        </div>
					        <div>
					          <h1>{element[0].symbol}</h1>
					        </div>
					    </Slider>
					</div>
				</div>
				<div className="rightMiddle">
					<h4>01. {this.props.lang ? 'Overview' : 'Преглед'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Symbol' : 'симбол'}</span><span>{element[0].symbol}</span></li>
						<li><span>{this.props.lang ? 'Atomic number' : 'Атомски број'}</span><span>{element[0].number}</span></li>
						<li><span>{this.props.lang ? 'Atomic Weight' : 'Атомска тежина'}</span><span>{element[0].atomic_mass}</span></li>
						<li><span>{this.props.lang ? 'Density' : 'Густина'}</span><span>{element[0].density} g/cm3</span></li>
						<li><span>{this.props.lang ? 'Melting Point' : 'Точка на топење'}</span><span>{element[0].melt ? element[0].melt : this.props.lang ? 'unknown' : 'непознато'} &deg;C</span></li>
						<li><span>{this.props.lang ? 'Boiling Point' : 'Точка на вриење'}</span><span>{element[0].boil ? element[0].boil : this.props.lang ? 'unknown' : 'непознато'} &deg;C</span></li>
					</ul>
					<h4>02. {this.props.lang ? 'Thermal Properties' : 'Топлински својства'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Phase' : 'Фаза'}</span><span>{element[0].phase}</span></li>
						<li><span>{this.props.lang ? 'Melting Point' : 'Точка на топење'}</span><span>{element[0].melt ? element[0].melt : this.props.lang ? 'unknown' : 'непознато'} &deg;C</span></li>
						<li><span>{this.props.lang ? 'Boiling Point' : 'Точка на вриење'}</span><span>{element[0].boil ? element[0].boil : this.props.lang ? 'unknown' : 'непознато'} &deg;C</span></li>
						<li><span>{this.props.lang ? 'Absolute melting point' : 'Апсолутна точка на топење'}</span><span>{this.props.lang ? 'unknown' : 'непознато'}</span></li>
						<li><span>{this.props.lang ? 'Absolute boiling point' : 'Апсолутна точка на вриење'}</span><span>{this.props.lang ? 'unknown' : 'непознато'}</span></li>
						<li><span>{this.props.lang ? 'Critical preasure' : 'Критички преголеми'}</span><span>12.76 Atm</span></li>
						<li><span>{this.props.lang ? 'Critical temperatura' : 'Критична температура'}</span><span>32.97 K</span></li>
						<li><span>{this.props.lang ? 'Heat of fusion' : 'Топлина на фузија'}</span><span>{this.props.lang ? 'unknown' : 'непознато'}</span></li>
						<li><span>{this.props.lang ? 'Heat of vaporization' : 'Топлина на испарување'}</span><span>0.452 kJ/mol</span></li>
						<li><span>{this.props.lang ? 'Heat of combustion' : 'Топлина на согорување'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Specific heat' : 'Специфична топлина'}</span><span>14300 J/(kg K)</span></li>
						<li><span>{this.props.lang ? 'Adiabatic index' : 'Адиабатски индекс'}</span><span>{this.props.lang ? 'unknown' : 'непознато'}</span></li>
						<li><span>{this.props.lang ? 'Neel point' : 'Нил точка'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Thermal conductivity' : 'Термичка спроводливост'}</span><span>0.1805 W/(m K)</span></li>
						<li><span>{this.props.lang ? 'Thermal expansion' : 'Термичка експанзија'}</span><span>N/A</span></li>
					</ul>
					<h4>03. {this.props.lang ? 'Physical properties' : 'Физички својства'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Density' : 'Густина'}</span><span>{element[0].density} g/cm3</span></li>
						<li><span>{this.props.lang ? 'Density (liquid)' : 'Густина (течност)'}</span><span>{element[0].density - 0.0500} g/cm3</span></li>
						<li><span>{this.props.lang ? 'Molar volume' : 'Моларен волумен'}</span><span>{element[0].molar_heat ? element[0].molar_heat.toFixed(0) - 0.500 : this.props.lang ? 'unknown' : 'непознато'}x10-6 g/cm3</span></li>
						<li><span>{this.props.lang ? 'Brinell hardness' : 'Тврдост на Бринел'}</span><span>{element[0].atomic_mass ? element[0].atomic_mass.toFixed(2) - 0.0500 : this.props.lang ? 'unknown' : 'непознато'} MPa</span></li>
						<li><span>{this.props.lang ? 'Mohs hardness' : 'Мохсова цврстина'}</span><span>{element[0].atomic_mass} MPa</span></li>
						<li><span>{this.props.lang ? 'Vickers hardness' : 'Масовно модул'}</span><span>{element[0].atomic_mass + 0.1500} MPa</span></li>
						<li><span>{this.props.lang ? 'Shear modules' : 'Модул на смолкнување'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Bulk modulus' : 'Масовно модул'}</span><span>65 Gpa</span></li>
						<li><span>{this.props.lang ? 'Molar heat' : 'Моларната топлина'}</span><span>{element[0].molar_heat}</span></li>
						<li><span>{this.props.lang ? 'Thermal exmapsion' : 'Термички измазнување'}</span><span>N/A</span></li>
					</ul>
					<h4>04. {this.props.lang ? 'Reactivity' : 'Реактивност'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Valence' : 'Валентност'}</span><span>6</span></li>
						<li><span>{this.props.lang ? 'Electronegativity' : 'Електронегативност'}</span><span>{element[0].electronegativity_pauling}</span></li>
						<li><span>{this.props.lang ? 'Electron afinity' : 'Електронска афинитет'}</span><span>{element[0].electron_affinity}kJ/mol</span></li>
						<li><span>{this.props.lang ? 'Ionization energy' : 'Ионска енергија'}</span><span>{element[0].ionization_energies.slice(0,2).map(el => `${el},`)}</span></li>
					</ul>
					<h4>05. {this.props.lang ? 'Safety' : 'Сигурност'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Autoignition point' : 'Точка на автониг'}</span><span>340 &deg;C</span></li>
						<li><span>{this.props.lang ? 'Flashpoint' : 'Флеш точка'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Heat of combustion' : 'Топлина на согорување'}</span><span>N/A</span></li>
					</ul>
					<h4>06. {this.props.lang ? 'Classifications' : 'Класификации'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Alternate names' : 'Алтернативни имиња'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Names of allotropes' : 'Имиња на алотропи'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Block' : 'Блокирај'}</span><span>{element[0].ypos}</span></li>
						<li><span>{this.props.lang ? 'Group' : 'Група'}</span><span>{element[0].xpos === 'sdown' ? '11' : element[0].xpos === 'down' ? '4' : element[0].xpos}</span></li>
						<li><span>{this.props.lang ? 'Period' : 'Период'}</span><span>{element[0].period}</span></li>
						<li><span>{this.props.lang ? 'Color' : 'Боја'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Discovery' : 'Откриено'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Gas phase' : 'Гасна фаза'}</span><span>{element[0].phase}</span></li>
					</ul>
					<h4>07. {this.props.lang ? 'Electrical properties' : 'Електрични својства'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Electrical Type' : 'Електричен тип'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Electrical conductivity' : 'Електрична спроводливост'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Resistivity' : 'Отпорност'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Superconducting point' : 'Суперспроводлива точка'}</span><span>N/A</span></li>
					</ul>
					<h4>0.8 {this.props.lang ? 'Magnetic Properties ' : 'Магнетни својства'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Magnetic Type' : 'Магнетен тип'}</span><span>{element[0].magnetic}</span></li>
						<li><span>{this.props.lang ? 'Cure point' : 'Точка на лекување'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Mass magnetic susceptibility' : 'Масовна магнетна осетливост'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Molar magnetic susceptibility' : 'Моларна магнетна осетливост'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Volume magnetic susceptibility' : 'Волуменска магнетна осетливост'}</span><span>N/A</span></li>
					</ul>
					<h4>09.{this.props.lang ? 'Abundances' : 'Богатства'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'In universe' : 'Во универзум'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'In sun' : 'Во сонце'}</span><span>3x10-6%</span></li>
						<li><span>{this.props.lang ? 'In meteoritis' : 'Во метеоритис'}</span><span>0.01%</span></li>
						<li><span>{this.props.lang ? "In earth's crust " : 'Во земјата кора'}</span><span>0.00%</span></li>
						<li><span>{this.props.lang ? 'In oceans' : 'Во океаните'}</span><span>0.00%</span></li>
						<li><span>{this.props.lang ? 'In humans' : 'Во луѓето'}</span><span>0.00%</span></li>	
					</ul>
					<h4>10. {this.props.lang ? 'Atomic dimensions and structures' : 'Атомски димензии и структури'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Atomic radius' : 'Атомски радиус'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Covalent radius' : 'Ковалентен радиус'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Van der Walls radius' : 'Ван дер Валс радиус'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? "Crystal structure" : 'Кристална структура'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Latice angles' : 'Лакови агли'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Latice constants' : 'Константи на латекс'}</span><span>N/A</span></li>	
						<li><span>{this.props.lang ? 'Space group name' : 'Име на просторната група'}</span><span>N/A</span></li>	
						<li><span>{this.props.lang ? 'Space group number' : 'Број на просторна група'}</span><span>{element[0].spacegroupnumber}</span></li>	
					</ul>
					<h4>11. {this.props.lang ? 'Nuclear properties' : 'Нуклеарни својства'}</h4>
					<ul>
						<li><span>{this.props.lang ? 'Half life' : 'Пола живот'}</span><span>{element[0].halflife} y</span></li>
						<li><span>{this.props.lang ? 'Lifetime' : 'Доживотна'}</span><span>{element[0].halflife + 250} y</span></li>
						<li><span>{this.props.lang ? 'Decay mode' : 'Режим на распаѓање'}</span><span>{element[0].alpha}</span></li>
						<li><span>{this.props.lang ? "Quantum numbers" : 'Quantum numbers'}</span><span>N/A</span></li>
						<li><span>{this.props.lang ? 'Neutron cross section' : 'Неутронски пресек'}</span><span>{element[0].cross}</span></li>
						<li><span>{this.props.lang ? 'Neutron mass absorption' : 'Апсорпција на неутронска маса'}</span><span>N/A</span></li>	
						<li><span>{this.props.lang ? 'Known isotopes' : 'Познати изотопи'}</span><span>N/A</span></li>	
						<li><span>{this.props.lang ? 'Stable isotopes' : 'Стабилни изотопи'}</span><span>N/A</span></li>	
						<li><span>{this.props.lang ? 'Isotopic abundances' : 'Изотопски изобили'}</span><span>N/A</span></li>	
					</ul>
				</div>
			</div>
		);
	}
}

export default SingleElement;
