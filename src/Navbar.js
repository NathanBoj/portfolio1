import React from 'react';

function Navbar() {
    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        } else {
            console.warn(`Element with id ${id} not found.`);
        }
    };

    return (
        <nav className="bg-gray-900 bg-opacity-75 backdrop-blur-sm text-white py-4 px-8 flex justify-between items-center fixed top-0 w-full z-50">
            <div className="text-xl font-bold">Develvcksj by kda</div>
            <ul className="flex justify-end items-right space-x-4 pr-4 ml-auto">
                <li className="cursor-pointer hover:text-blue" onClick={() => handleClick('Section1')}>Section 1</li>
                <li className="cursor-pointer hover:text-blue" onClick={() => handleClick('Section2')}>Section 2</li>
                <li className="cursor-pointer hover:text-blue" onClick={() => handleClick('Section3')}>Section 3</li>
            </ul>
            <svg
                className="w-6 h-6"
                fill="none" stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
            </svg>
            <button
                type="button"
                onClick={() => window.open('https://www.linkedin.com/in/nathan-bojczuk-b74717231/', '_blank')}
                data-te-ripple-init
                data-te-ripple-color="light"
                className="ml-4 mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                style={{ backgroundColor: '#0077b5' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
            </button>
        </nav>
    );
}

export default Navbar;
