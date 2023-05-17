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
        <nav className="bg-black bg-opacity-60 backdrop-blur-lg text-white py-4 px-8 flex justify-between items-center fixed top-0 w-full z-50 border-b-4 border-orange-500">
            <svg
                className="w-6 h-6 mr-4 " 
                fill="none" stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                onClick={() => handleClick('Section1')}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
            </svg>
            <div className="text-xl font-bold"  onClick={() => handleClick('Section1')}>Nathan Bojczuk</div>
            <ul className="hidden md:flex justify-end items-right ml-auto">
                <li className=" mr-4 cursor-pointer hover:text-orange-500" onClick={() => handleClick('Section1')}>Home</li>
                <li className=" mr-4 cursor-pointer hover:text-orange-500" onClick={() => handleClick('About')}>About</li>
                <li className="mr-4 cursor-pointer hover:text-orange-500" onClick={() => handleClick('Section2')}>Projects</li>
                <li className="mr-4 cursor-pointer hover:text-orange-500" onClick={() => handleClick('Section3')}>Contact Me!</li>
            </ul>
            
            <button
                type="button"
                onClick={() => window.open('https://www.linkedin.com/in/nathan-bojczuk-b74717231/', '_blank')}
                data-te-ripple-init
                data-te-ripple-color="light"
                className="hidden md:inline-block hover:opacity-70 mr-4 mb-2 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
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
           
            <button
                type="button"
                onClick={() => window.open('https://github.com/NathanBoj', '_blank')}
                data-te-ripple-init
                data-te-ripple-color="light"
                className= "hidden md:inline-block hover:opacity-70 mr-4 mb-2 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                style={{ backgroundColor: '#333' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            </button>
        </nav>
    );
}

export default Navbar;
