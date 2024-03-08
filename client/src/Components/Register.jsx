import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();

	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleInput = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const registerUser = async (data) => {
		const postData = {
			name: data.name,
			email: data.email,
			password: data.password,
		};

		await axios
			.post('http://localhost:5000/users', postData)
			.then(() => {
				enqueueSnackbar('Registered successfuly', {
					variant: 'success',
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'center',
					},
				});
				navigate('/login');
			})
			.catch(() => {
				enqueueSnackbar('user already registered', {
					variant: 'error',
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'center',
					},
				});
			});
	};

	const validateData = (data, e) => {
		e.preventDefault();

		if (!data.name) {
			enqueueSnackbar('user name is requires', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		if (data.name.length < 3) {
			enqueueSnackbar('user name should be greater than 3', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		if (!data.email) {
			enqueueSnackbar('Email is requires', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(data.email)) {
			enqueueSnackbar('Email is not in proper format', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		if (!data.password) {
			enqueueSnackbar('password is requires', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		if (data.password.length < 6) {
			enqueueSnackbar('password must be 6 char', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		if (!data.confirmPassword) {
			enqueueSnackbar('confirm Password', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		if (data.confirmPassword !== data.password) {
			enqueueSnackbar('password did not match', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		setForm({
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		});

		return true;
	};

	return (
		<>
			<div className='text-2xl w-full h-[100vh] flex items-center justify-center flex-col drop-shadow-md'>
				<h1 className='font-bold mb-4'>Create an Account</h1>
				<form
					onSubmit={(e) => {
						if (validateData(form, e)) {
							registerUser(form);
						}
					}}
					className='flex flex-col border p-4 rounded-md drop-shadow-sm'>
					<label className='text-sm' htmlFor='email'>
						User Name
					</label>
					<input
						className='rounded-md p-2'
						type='text'
						id='name'
						name='name'
						placeholder='Enter Name'
						onChange={(e) => handleInput(e)}
						value={form.name}
						autoComplete='off'
					/>
					<label className='text-sm mt-2' htmlFor='email'>
						Email
					</label>
					<input
						className='rounded-md p-2'
						type='email'
						id='email'
						name='email'
						placeholder='Enter email'
						onChange={(e) => handleInput(e)}
						value={form.email}
						autoComplete='off'
					/>
					<label className='text-sm mt-2' htmlFor='password'>
						Passsword
					</label>
					<input
						className='rounded-md p-2'
						type='password'
						id='password'
						name='password'
						placeholder='Enter Password'
						onChange={(e) => handleInput(e)}
						value={form.password}
					/>
					<label className='text-sm mt-2' htmlFor='confirmPassword'>
						Confirm Password
					</label>
					<input
						className='rounded-md p-2'
						type='password'
						id='confirmPassword'
						name='confirmPassword'
						placeholder='Confirm Password'
						onChange={(e) => handleInput(e)}
						value={form.confirmPassword}
					/>
					<button
						className='bg-blue-500 text-white font-bold p-2 mt-2 rounded-md'
						type='submit'>
						Register
					</button>

					<span className='text-sm mt-2'>
						All Ready a User ?
						<Link
							className='bg-blue-500 px-4 py-1 rounded-md ml-4 text-white'
							to='/login'>
							Login
						</Link>
					</span>
				</form>
			</div>
		</>
	);
};

export default Register;
