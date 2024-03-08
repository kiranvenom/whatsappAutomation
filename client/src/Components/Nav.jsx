import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	let userEmail = localStorage.getItem('userEmail');

	const handleLogOut = () => {
		localStorage.removeItem('userEmail');
		window.location.reload();
	};

	return (
		<>
			<nav className='max-w-[1200px] m-auto flex justify-between h-[4rem] items-center border-b'>
				<h1>Awesome</h1>
				{userEmail !== null ? (
					<div className='flex gap-4 items-center'>
						<h1>{userEmail}</h1>
						<button
							onClick={handleLogOut}
							className='bg-blue-500 px-4 py-1 rounded-md ml-4 text-white'>
							Log Out
						</button>
					</div>
				) : (
					<div className='flex gap-4'>
						<Link
							className='bg-blue-500 px-4 py-1 rounded-md ml-4 text-white'
							to='/login'>
							Login
						</Link>
						<Link
							className='bg-blue-500 px-4 py-1 rounded-md ml-4 text-white'
							to='/register'>
							Register
						</Link>
					</div>
				)}
			</nav>
		</>
	);
};

export default Nav;
