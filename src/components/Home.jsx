import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
	return (
		<div name='home' className='bg-[#0a192f] w-full h-screen'>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-pink-600'>Hi, my name is</p>
				<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
					András Baranyai
				</h1>
				<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
					I'm a Junior Front-End Developer
				</h2>
				<p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a junior front-end developer, who looking to further improve his skills and work together with other developers.
				</p>
				<div>
					<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
						<Link to='work' smooth={true} duration={500}>
							View Work
						</Link>
						<span className='group-hover:rotate-90 duration-300'>
							<HiArrowNarrowRight className='ml-3' />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
