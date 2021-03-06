import React from 'react';

const Navbar = () => {
    return (
        <nav
            class="top-0 bg-black absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
            <div
                class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div
                    class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        class="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                        href="/">The Power Room</a><button
                        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick="toggleNavbar('example-collapse-navbar')">
                        <i class="text-white fas fa-bars"></i>
                    </button>
                </div>
                <div
                    class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
                    id="example-collapse-navbar">
                    <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">

                        <li class="flex items-center">
                            <a
                                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://linkedin.com/in/enamulhaquee"><i
                                    class="text-orange-500 fab fa-linkedin text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Share</span></a>
                        </li>

                        <li class="flex items-center">
                            <a
                                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://twitter.com/enamulhaque71"><i
                                    class="text-orange-500 fab fa-twitter text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Tweet</span></a>
                        </li>

                        <li class="flex items-center">
                            <a
                                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://instagram.com/enamulhaque.dev"><i
                                    class="text-orange-500 fab fa-instagram text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Profile</span></a>
                        </li>
                        <li class="flex items-center">
                            <a
                                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://github.com/enamulhaque7"><i
                                    class="text-orange-500 fab fa-github text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Profile</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;