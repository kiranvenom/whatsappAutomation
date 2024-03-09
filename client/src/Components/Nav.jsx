import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io';

const Nav = () => {
	let userEmail = localStorage.getItem('userEmail');

	const handleLogOut = () => {
		localStorage.removeItem('userEmail');
		window.location.reload();
	};

	let formatedName = userEmail?.split('')?.splice(0, 2)?.join('');

	return (
		<>
			<nav className='max-w-[1200px] m-auto flex justify-between h-[4rem] items-center border-b'>
				<div className='flex items-center gap-2'>
					<h1 className='text-green-500'>WhatsApp Automation</h1>
					<IoLogoWhatsapp size={30} color='lightgreen' />
				</div>
				{userEmail !== null ? (
					<div className='flex gap-4 items-center'>
						<h1 className='border uppercase w-[35px] h-[35px] rounded-full flex justify-center items-center'>
							{formatedName}
						</h1>
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
