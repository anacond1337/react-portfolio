import React from 'react';
import html from '../assets/html.png';
import github from '../assets/github.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import sass from '../assets/sass.png';
import typescript from '../assets/typescript.png';
import git from '../assets/git.png';
import mui from '../assets/mui.png';
import eslint from '../assets/eslint.png';
import reactquery from '../assets/reactquery.png';

const Skills = () => {
	return (
		<div name='skills' className='bg-[#0a192f]  text-gray-300 w-full h-screen'>
			{/*Container*/}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600'>
						Skills
					</p>
					<p className='py-4'>// These are the technologies I've worked with</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={html} alt='html icon' />
						<p className='my-4'>HTML</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={css} alt='css icon' />
						<p className='my-4'>CSS</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={javascript}
							alt='javascript icon'
						/>
						<p className='my-4'>JAVASCRIPT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={typescript}
							alt='typescript icon'
						/>
						<p className='my-4'>TYPESCRIPT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={react} alt='react icon' />
						<p className='my-4'>REACT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={tailwind} alt='tailwind icon' />
						<p className='my-4'>TAILWIND</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={sass} alt='sass icon' />
						<p className='my-4'>SASS</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={git} alt='git icon' />
						<p className='my-4'>GIT</p>
					</div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={github} alt='github icon' />
						<p className='my-4'>GITHUB</p>
					</div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={reactquery} alt='react query icon' />
						<p className='my-4'>REACT QUERY</p>
					</div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={mui} alt='material ui icon' />
						<p className='my-4'>MATERIAL UI</p>
					</div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={eslint} alt='eslint icon' />
						<p className='my-4'>ESLINT</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
