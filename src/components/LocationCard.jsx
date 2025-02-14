import React from 'react'
import Button from './Button'
import { MdArrowOutward } from "react-icons/md";
export default function LocationCard({ datum }) {
    return (
        <div className="card bg-[#faf8f8] p-5">
            <figure >
                <img
                    src={datum.image}
                    alt="Shoes"
                    className="rounded-xl h-[190px] w-full object-cover" />
            </figure>
            <div className="flex justify-between pt-5 items-center">
                <h2 className="text-lg font-bold">{datum.title}</h2>
                <Button icon={<MdArrowOutward />} />
            </div>
        </div>
    )
}
