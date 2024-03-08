import { useState } from 'react';

const UploadImg = () => {
	const [image, setimage] = useState('');

	const handleImageState = (e) => {
		console.log(e.target.value);
	};

	return (
		<>
			<div className='h-[90vh] flex justify-center items-center'>
				<form className='flex flex-col'>
					<input
						className='bg-purple-200 w-[60vw] h-[60vh] rounded-lg flex justify-center items-center'
						type='file'
						name='file'
						id='file'
						onChange={(e) => handleImageState(e)}
					/>
					<button
						className='mt-6 border border-black py-4 rounded-3xl'
						type='submit'>
						Upload
					</button>
				</form>
			</div>
		</>
	);
};

export default UploadImg;
