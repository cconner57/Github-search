import React from 'react';

const User = ({ image, name, link }) => {
	return (
		<div>
			<img src={image} alt='User Avatar' />
			<h3>{name}</h3>
			<a href={link}>
				<input type='button' value='More' />
			</a>
		</div>
	);
};

export default User;
