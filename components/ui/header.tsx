import Link from 'next/link';
import { useState } from'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>
            <img src="/logo.png" alt="RunAsh AI" className="h-8 w-8" />
          </a>
        </Link>
        <button
          className="lg:hidden flex justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
        <ul
          className={`lg:flex items-center ${isOpen? 'block' : 'hidden'}`}
        >
          <li>
            <Link href="/">
              <a className="text-gray-600 hover:text-gray-900">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a className="text-gray-600 hover:text-gray-900">Features</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className="text-gray-600 hover:text-gray-900">Pricing</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
