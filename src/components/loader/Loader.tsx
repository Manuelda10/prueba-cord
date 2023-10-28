import React from 'react';

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div>
      <svg className='animate-spin h-6 w-6 text-gray-100' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"/>
      </svg>
    </div>
  );
};

export default Loader;
