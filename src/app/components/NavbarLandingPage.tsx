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
			<nav className="fixed top-0 left-0 w-screen h-28 px-8 py-6 bg-slate-50">
				<div className="flex items-center justify-between flex-wrap relative h-full md:flex-nowrap ">

					<div className="order-first logo">
						<img
							src={kodikas.src}
							className="w-40 h-12"
						/>
					</div>

					<ul className={`font-medium text-lg absolute right-0 top-24 z-50 flex flex-col order-last w-full text-center bg-slate-200 opacity-50
						md:relative md:top-0 md:flex md:flex-row md:order-none md:w-auto md:mt-0 md:text-left md:bg-transparent md:opacity-100
						${isOpenMenu ? 'flex' : 'hidden'}`}
					>
						<li>
							<a className="block px-4 py-4 text-black">What We Offer</a>
						</li>
						<li>
							<a className="block px-4 py-4 text-black">Pricing</a>
						</li>
						<li>
							<a className="block px-4 py-4 text-black">Blog</a>
						</li>
						<li>
							<a className="block px-4 py-4 text-black">Contact Us</a>
						</li>
					</ul>

					<div className="flex items-center">
						<button type="button"
							className="relative flex mr-3 text-sm rounded-full"
							onClick={() => { setIsOpenProfile(!isOpenProfile); setIsOpenMenu(false) }}>
							<FontAwesomeIcon size="2x" icon={faUserDoctor} />

							<div className={`absolute right-0 top-12 z-50 my-4 text-base list-none rounded-md bg-slate-600 ${isOpenProfile ? '' : 'hidden'}`}>
								<div className="px-4 py-3">
									<span className="block text-base text-gray-900">Bonnie Green</span>
									<span className="block text-base  text-gray-500 truncate">name@flowbite.com</span>
								</div>
								<ul className="py-2">
									<li>
										<a href="#" className="block px-4 py-2 text-base text-white hover:bg-gray-100">Dashboard</a>
									</li>
									<li>
										<a href="#" className="block px-4 py-2 text-base text-white hover:bg-gray-100">Settings</a>
									</li>
									<li>
										<a href="#" className="block px-4 py-2 text-base text-white hover:bg-gray-100">Earnings</a>
									</li>
									<li>
										<a href="#" className="block px-4 py-2 text-base text-white hover:bg-gray-100">Sign out</a>
									</li>
								</ul>
							</div>
						</button>
						<button type="button" onClick={() => { setIsOpenMenu(!isOpenMenu); setIsOpenProfile(false) }}
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
