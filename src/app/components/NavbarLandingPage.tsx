"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserDoctor, faUserTie } from '@fortawesome/free-solid-svg-icons'
import kodikas from '../assets/kodikas.png'

const NavbarLandingPage = () => {
	const [isOpenProfile, setIsOpenProfile] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	return (
		<>
			<nav className="fixed top-0 left-0 w-screen px-12 py-6">
				<div className="flex items-center justify-between flex-wrap relative">

					<div className="logo">
						<img
							src={kodikas.src}
							className="w-48 h-16"
						/>
					</div>

					<div className="items-center justify-between ml-4 hidden md:flex">
						<ul className="flex flex-row font-medium p-4 text-lg">
							<li>
								<a className="block px-4 text-black rounded">What We Offer</a>
							</li>
							<li>
								<a className="block px-4 text-black rounded">Pricing</a>
							</li>
							<li>
								<a className="block px-4 text-black rounded">Blog</a>
							</li>
							<li>
								<a className="block px-4 text-black rounded">Contact Us</a>
							</li>
						</ul>
					</div>

					<div className="flex items-center">
						<button type="button"
							className="relative flex mr-3 text-sm rounded-full"
							onClick={() => setIsOpenProfile(!isOpenProfile)}>
							<FontAwesomeIcon size="2x" icon={faUserDoctor} />

							<div className={`absolute right-0 top-10 z-50 my-4 text-base list-none rounded-md bg-gray-600 ${isOpenProfile ? '' : 'hidden'}`}>
								<div className="px-4 py-3">
									<span className="block text-sm text-gray-900">Bonnie Green</span>
									<span className="block text-sm  text-gray-500 truncate">name@flowbite.com</span>
								</div>
								<ul className="py-2">
									<li>
										<a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">Dashboard</a>
									</li>
									<li>
										<a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">Settings</a>
									</li>
									<li>
										<a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">Earnings</a>
									</li>
									<li>
										<a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">Sign out</a>
									</li>
								</ul>
							</div>
						</button>
						<button type="button"
							className="inline-flex items-center ml-2 text-sm text-black rounded-lg md:hidden">
							<FontAwesomeIcon size="2x" icon={faBars} />
						</button>
					</div>

				</div>

			</nav>
		</>
	);
};

export default NavbarLandingPage;
