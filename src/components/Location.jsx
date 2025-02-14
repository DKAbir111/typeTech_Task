import dbConnect from '@/app/lib/dbConnect'
import React from 'react'
import LocationCard from './LocationCard'
import Button from './Button';
import { MdArrowOutward } from 'react-icons/md'
import { FaSearch } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { FaArrowDownWideShort } from "react-icons/fa6";
export default async function Location() {
    const data = await dbConnect("info").find({}).toArray()
    // const data = await fetch('http://localhost:3000/api/data')
    // const posts = await data.json()
    // console.log(posts)
    return (
        <div className='py-10'>
            <div className="container mx-auto flex justify-between items-center border-b-2 py-5 px-3">
                <h3 className="text-lg font-bold">Miami Dade County</h3>
                <span className='flex items-center gap-5'>
                    <FaSearch />
                    <LuArrowUpDown />
                    <FaArrowDownWideShort />
                    <Button icon={<MdArrowOutward />} />
                </span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto py-10 px-3'>
                {
                    data.map(datum => <LocationCard key={data._id} datum={datum} />)
                }
            </div>
        </div>

    )
}
