import React from 'react';
import dating from '../assets/dating.png';
import ecommerce from '../assets/ecommerce.png';
import todoapp from '../assets/todoapp.png';

const Work = () => {
	return (
		<div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
						Work
					</p>
					<p className='py-6'>// Check out some of my recent work</p>
				</div>
				{/* Container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${ecommerce})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						{/* Hover Effect */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								E-Commerce Site
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://andrasbaranyai-ecommerce.netlify.app/'
									target='_blank'>
									<button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/anacond1337/ecommerce' target='_blank'>
									<button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${todoapp})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						{/* Hover Effect */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								TODO APP
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://andrasbaranyai-todoapp.netlify.app/'
									target='_blank'>
									<button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/anacond1337/crud'
									target='_blank'>
									<button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${dating})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						{/* Hover Effect */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Dating App
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://andrasbaranyai-dateapp.netlify.app/'
									target='_blank'>
									<button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/anacond1337/dating-app'
									target='_blank'>
									<button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
