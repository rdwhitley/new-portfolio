import React, { useState,useEffect } from 'react'; 

import githubSVG from '../../assets/github-logo.svg';
import linkedinSVG from '../../assets/linkedin.svg';
import './icon.css';

const Icon = () => {
		const iconsArray = [{svg: githubSVG, link: "https://github.com/rdwhitley"}, {svg: linkedinSVG, link: "https://www.linkedin.com/in/rafiq-whitley-0066721a1/"}];
	return (
		<div className='flex'>
			{
				iconsArray.map(icon => {
					return <a href={icon.link}><img className="icon"src={icon.svg}/></a>
				})
			}
			
			
		</div>
	)
};

export default Icon;