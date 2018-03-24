import React from "react";

const rng = Math.floor(Math.random() * Math.floor(100));

const Weather = (props) => {
	return (
		<div className="weather__info">
			{ 
				props.city && props.country && <p className="weather__key">Location: 
				<span className="weather__value"> { props.city }, { props.country }</span></p>
			}

			{ 
				props.temperature && <p className="weather__key">Temperature: 
				<span className="weather__value"> { props.temperature }&#8451;</span></p> 
			}

			{ 
				props.humidity && <p className="weather__key">Humidity: 
				<span className="weather__value"> { props.humidity }%</span></p> 
			}

			{ 
				props.description && <p className="weather__key">Conditions: 
				<span className="weather__value"> { props.description }</span></p> 
			}

			{
				props.error && <p className="weather__error">{ props.error}</p> 
			}

			{
				props.fun && props.chance && <p className="weather__key">{ props.fun }<span className="weather__value">{ props.chance }</span></p> 
			}

		</div>
	);
}

export default Weather;