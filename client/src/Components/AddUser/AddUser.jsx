import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import '../AddUser/AddUser.css';

const AddUser = () => {
	const { enqueueSnackbar } = useSnackbar();

	const [loggedIn, setLoggedIn] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		phoneNumber: '',
		isEligible: 'true',
		checked: 'false',
	});

	const userfound = localStorage.getItem('userEmail');

	useEffect(() => {
		if (userfound !== null) {
			setLoggedIn(true);
		}
	}, [userfound]);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validateData = (data) => {
		if (!data.name || !data.phoneNumber) {
			enqueueSnackbar('Name and Phone Number are required', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		if (data.phoneNumber.length !== 10 || isNaN(data.phoneNumber)) {
			enqueueSnackbar('Phone Number must be a 10-digit number', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		setFormData({
			name: '',
			phoneNumber: '',
		});

		return true;
	};

	const addUser = (data) => {
		console.log(data);
	};

	return (
		<>
			{loggedIn ? (
				<div className='h-[90vh] flex justify-center items-center'>
					<form
						className='w-[20vw]'
						onSubmit={(e) => {
							e.preventDefault();
							if (validateData(formData)) {
								addUser(formData);
							}
						}}>
						<Label htmlFor='name'>Name</Label>
						<Input
							type='text'
							id='name'
							placeholder='Enter Name'
							name='name'
							value={formData.name}
							onChange={(e) => handleInput(e)}
						/>

						<Label htmlFor='number'>Number</Label>
						<Input
							type='number'
							id='number'
							name='phoneNumber'
							value={formData.phoneNumber}
							placeholder='Enter Phone Number'
							onChange={(e) => handleInput(e)}
						/>

						<Button
							className='mt-4'
							variant='secondary'
							type='submit'>
							Add user
						</Button>
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

export default AddUser;
