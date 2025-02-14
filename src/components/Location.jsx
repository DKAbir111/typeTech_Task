import dbConnect from '@/app/lib/dbConnect'
import React from 'react'
import LocationCard from './LocationCard'

export default async function Location() {
    const data = await dbConnect("info").find({}).toArray()
    // const data = await fetch('http://localhost:3000/api/data')
    // const posts = await data.json()
    // console.log(posts)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto py-10'>
            {
                data.map(datum => <LocationCard key={data._id} datum={datum} />)
            }
        </div>
    )
}
