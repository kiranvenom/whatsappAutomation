import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();

	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const handleInput = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const loginUser = async (data) => {
		const postData = {
			email: data.email,
			password: data.password,
		};

		await axios
			.post('http://localhost:5000/login', postData)
			.then(() => {
				localStorage.setItem('userEmail', data.email);
				enqueueSnackbar('Login successfuly', {
					variant: 'success',
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'center',
					},
				});
				navigate('/');
			})
			.catch(() => {
				enqueueSnackbar('please register', {
					variant: 'error',
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'center',
					},
				});
			});
	};

	const validateData = (data) => {
		if (!data.email || !data.password) {
			enqueueSnackbar('Email and password are required', {
				variant: 'warning',
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'center',
				},
			});
			return false;
		}

		setForm({
			email: '',
			password: '',
		});

		return true;
	};

	return (
		<div className='text-2xl w-full h-[100vh] flex items-center justify-center flex-col drop-shadow-md'>
			<h1 className='font-bold mb-4'>LOGIN</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (validateData(form)) {
						loginUser(form);
					}
				}}
				className='flex flex-col border p-4 rounded-md drop-shadow-sm'>
				<label className='text-sm mt-2' htmlFor='email'>
					Email
				</label>
				<input
					className='rounded-md p-2'
					type='email'
					id='email'
					name='email'
					placeholder='Enter email'
					autoComplete='off'
					value={form.email}
					onChange={(e) => handleInput(e)}
				/>
				<label className='text-sm mt-2' htmlFor='password'>
					Password
				</label>
				<input
					className='rounded-md p-2'
					type='password'
					id='password'
					name='password'
					placeholder='Enter Password'
					value={form.password}
					onChange={(e) => handleInput(e)}
				/>

				<button
					className='bg-blue-500 text-white font-bold p-2 mt-2 rounded-md'
					type='submit'>
					Login
				</button>

				<span className='text-sm mt-2'>
					Don't Have Account ?
					<Link
						className='bg-blue-500 px-4 py-1 rounded-md ml-4 text-white'
						to='/register'>
						Register
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
