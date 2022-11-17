import React from 'react';

const Contact = () => {
	return (
		<div
			name='contact'
			className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
			<div className='pb-8'>
				<p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
					Contact
				</p>
				<p className='text-gray-300 py-4'>
					You can reach out to me via email: andrasbaranyai0118@gmail.com
				</p>
				<p className='text-gray-300 py-4'>Or on the phone: +36 20 370 1929</p>
			</div>
		</div>
	);
};

export default Contact;
