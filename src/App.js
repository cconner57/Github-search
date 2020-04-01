import React, { useState } from 'react';
import User from './User';

function App() {
	const [data, setData] = useState();
	return (
		<div className='App'>
			<h1>Github Search</h1>
			<input type='search' placeholder='Search User...' />
			<input type='button' value='Search' />
			<User />
		</div>
	);
}

export default App;
