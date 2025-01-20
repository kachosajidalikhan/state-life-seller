// Import necessary modules
import React from 'react';
import { FaShare } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { files } from '../../constants/index'



// Data for the houses (replace with API data if needed)
const houses = [
    { id: 1,phone:123456789,email:"xyz@gmail.com", name: 'Khan House', description: 'lovely house', garage: '1', type: 'For Sale', bedrooms: '4', bathrooms: '3', area: '2500', username: 'Lorem', price: '$120', location: 'Downtown, West Side', image: files.dash },
    { id: 2,phone:123456789,email:"xyz@gmail.com", name: 'Sewani House', description: 'lovely house', garage: '2', type: 'For Rent', bedrooms: '5', bathrooms: '2', area: '2200', username: 'Lorem House', price: '$145/Month', location: 'Downtown, West Side', image: files.dash },
    { id: 3,phone:123456789,email:"xyz@gmail.com", name: 'Abbas House', description: 'lovely house', garage: '1', type: 'For Sale', bedrooms: '4', bathrooms: '2', area: '2100', username: 'Lorem House', price: '$160/Month', location: 'Downtown, West Side', image: files.dash },
];

const MyPropertiesSeller = () => {
    const nav = useNavigate();
    return (<>
        <div className=" p-6">
            <div className="w-full flex justify-end items-center gap-2">
                <input
                    type="text"
                    placeholder="Search by Address, City, or ZIP"
                    className="border rounded-lg px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-500 p-2 rounded-lg text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
                {houses.map((house) => (
                    <div
                        key={house.id}
                        onClick={() => {
                            // Pass only the clicked house's data to the detail page
                            nav(`/my-property-detail/${house.id}`, { state: { house } });
                        }}
                        className="lg:w-[20vw] xl:w-[16vw] border bg-white rounded-[10px] p-1 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        <img src={house.image} alt={house.name} className="w-full rounded-[10px] h-40 object-cover" />
                        <div className="p-2">
                            <div className='flex items-center justify-between gap-2'>
                                <h3 className="text-xs text-center font-semibold">{house.name}</h3>
                                <p className="text-xs text-[#0066FF] font-bold text-center">{house.price}</p>
                            </div>
                            <div className='flex'>
                                <FaLocationDot className='text-gray-500 w-[10px] mr-2' />
                                <p className="text-xs text-gray-500">{house.location}</p>
                            </div>

                            <hr className='mt-2' />
                            <div className="flex justify-between  items-center mt-2">

                                <div className="flex gap-2 items-center ">
                                    <div className='w-6'>
                                        <img className='h-6 rounded-full' src={house.image} alt={house.name} />
                                    </div>
                                    <span className='text-[10px]'>{house.username}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span className='bg-[#E5F0FF] text-[#1252AE] p-2 rounded-full'><FaShare /></span>
                                    {/* <span className='bg-[#1252AE] text-white p-2 rounded-full'><FaHeart /></span> */}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <button onClick={()=>{nav('/seller-post-ad')}} className="bg-[#1E3FB4] w-1/1 rounded-full border px-4 py-3 text-white">
                Add Post
            </button>
            </>
    );
};

export default MyPropertiesSeller;
