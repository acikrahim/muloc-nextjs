"use client";

import React, { useState } from "react";
import kodikas from '../assets/kodikas.png'

const NavbarLandingPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav
				className="fixed top-0 left-0 w-screen border-solid border-b border-gray-400 flex items-center justify-between flex-wrap p-4 lg:px-32"
				style={{
					'boxShadow': '0px 2px 8px 2px rgba(0, 0, 0, .16)'
        }}
			>

			<div className="flex flex-shrink-0 items-center">
				<img
					src={kodikas.src}
					className="w-100 h-10"
				/>
			</div>

			<div className="block lg:hidden">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
				>
					<svg
						className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
					<svg
						className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
					</svg>
				</button>
			</div>

			<div
				className={`w-full ml-auto lg:flex lg:items-center lg:w-auto xs:max-lg:flex-col ${isOpen ? 'flex' : 'hidden'
					}`}
			>
				{[
					["home", "/"],
					["about", "/"],
					["qualifications", "/"],
					["services", "/"],
					["projects", "/projects"],
					["blog", "/"],
				].map(([title, url]) => (
					<a
						key={title}
						href={url}
						className="px-4 py-2 text-base font-bold text-white text-amber-100 hover:text-yellow-400 xs:max-lg:text-right xs:text-sm"
						style={{
							'textShadow': '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'
						}}
					>
						{title}
					</a>
				))}
			</div>
		</nav >
        </>
    );
};

export default NavbarLandingPage;
