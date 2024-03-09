import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UploadImg = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [fileName, setFileName] = useState('');
	const [image, setImage] = useState('');
	const userfound = localStorage.getItem('userEmail');

	useEffect(() => {
		if (userfound !== null) {
			setLoggedIn(true);
		}
	}, [userfound]);

	const handleImageState = (e) => {
		// console.log(e.target.value);
		setFileName(e.target.value);
	};

	let formatedName;

	if (fileName == undefined || fileName == null || fileName == '') {
		formatedName = 'Upload an Image';
	} else {
		formatedName = fileName;
	}

	return (
		<>
			{loggedIn ? (
				<div className='h-[90vh] flex justify-center items-center'>
					<form className='flex flex-col'>
						<label
							className='bg-purple-200 w-[60vw] h-[60vh] rounded-2xl flex justify-center items-center border-4 border-dashed border-purple-400 text-gray-600 hover:bg-purple-100 hover:border-purple-500 focus:outline-none focus:border-purple-500 transition-all'
							htmlFor='file'>
							<h1 className='font-bold'>{formatedName}</h1>
						</label>
						<input
							className='hidden'
							type='file'
							name='file'
							id='file'
							accept='.jpeg,.jpg,.png'
							onChange={(e) => handleImageState(e)}
						/>
						<button
							className='mt-6 border border-black py-4 rounded-2xl hover:bg-purple-100 transition-all hover:font-bold'
							type='submit'>
							Upload
						</button>
					</form>
				</div>
			) : (
				<div className='h-[90vh] flex flex-col justify-center items-center'>
					<img
						className='w-[30%] bg-blend-screen'
						src='https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg?t=st=1709972330~exp=1709975930~hmac=783ddbe8a6e10e0268fe699b738008c38611a15597f427a14a02299f59ea5e42&w=740'
						alt='bird'
					/>
					<h1>
						<Link
							className='bg-blue-200 px-4 py-1 rounded-full'
							to='/login'>
							Login
						</Link>{' '}
						or{' '}
						<Link
							className='bg-blue-200 px-4 py-1 rounded-full'
							to='/register'>
							Register
						</Link>
					</h1>
				</div>
			)}
		</>
	);
};

export default UploadImg;
