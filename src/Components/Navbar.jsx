import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header aria-label="Site Header" className="shadow-sm">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 " >
        <div className="flex items-center gap-4">
          <Link to="/" >
        <img src="https://img.freepik.com/premium-vector/taekwondo-logo-template-martial-arts-badge_304830-502.jpg?w=2000" alt="" className="h-28" />
          </Link>
      </div>

      <nav
  aria-label="Site Nav"
  className={`hidden items-center justify-center gap-8 text-sm font-medium lg:w-0 lg:flex-1 hidden lg:flex`}
>
  <Link className="text-gray-900 font-semibold hover:text-gray-500 transition-colors duration-150" to="/">
    Home
  </Link>
  <Link className="text-gray-900 font-semibold hover:text-gray-500 transition-colors duration-150" to="">
    Competition and Events
  </Link>
  <Link className="text-gray-900 font-semibold hover:text-gray-500 transition-colors duration-150" to="/gallery">
    Photo Gallery
  </Link>
  <Link to="/committee" className="text-gray-900 font-semibold hover:text-gray-500 transition-colors duration-150">
    Committee Members
  </Link>
  <Link className="text-gray-900 font-semibold hover:text-gray-500 transition-colors duration-150" to="">
    Council Members
  </Link>
  <Link className="text-gray-900 font-semibold hover:text-gray-500 transition-colors duration-150" to="">
    Official
  </Link>
  <Link className="text-gray-900 font-semibold hover:text-gray-500 transition-colors duration-150" to="/about">
    About Us
  </Link>
</nav>


          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-gray-900 hover:text-gray-500 transition-colors duration-150"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} border-t border-gray-100 lg:hidden`}>
        <nav className="flex flex-col items-center justify-center p-4 text-sm font-medium">
      <Link to="/" className="my-2 text-gray-900 hover:text-gray-500 transition-colors duration-150" href="" onClick={() => setIsOpen(false)}>
        Home
      </Link>
      <a className="my-2 text-gray-900 hover:text-gray-500 transition-colors duration-150" href="" onClick={() => setIsOpen(false)}>
        Competition and Events
      </a>
      <Link className="my-2 text-gray-900 hover:text-gray-500 transition-colors duration-150" to='/gallery' onClick={() => setIsOpen(false)}>
        Photo Gallery
      </Link>
      <Link to="/committee" className="my-2 text-gray-900 hover:text-gray-500 transition-colors duration-150" onClick={() => setIsOpen(false)}>
        Committee Members
      </Link>
      <a className="my-2 text-gray-900 hover:text-gray-500 transition-colors duration-150" href="" onClick={() => setIsOpen(false)}>
        Council Members
      </a>
      <a className="my-2 text-gray-900 hover:text-gray-500 transition-colors duration-150" href="" onClick={() => setIsOpen(false)}>
        Official
      </a>
      <Link to="/about" className="my-2 text-gray-900 hover:text-gray-500 transition-colors duration-150" href="" onClick={() => setIsOpen(false)}>
        About Us
      </Link>
    </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
