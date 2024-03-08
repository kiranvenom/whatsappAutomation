import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Main from './Components/Main';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
