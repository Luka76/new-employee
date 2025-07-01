import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex justify-center items-center m-auto gap-2'>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-gray-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.64 5.64a7.5 7.5 0 0010.61 10.61z"
    />
  </svg>
      <input placeholder="Enter product You're looking for..." className='text-left w-[250px]'/>
    </div>
  )
}

export default SearchBar