"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import { FaAngleDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = (
        <>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Properties</a></li>
            <li><a href="#">Neighborhood</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
        </>
    );

    return (
        <nav className={`fixed right-0 left-0 z-10 transition-all duration-300 ${isScrolled ? "bg-stone-950 shadow-lg" : "bg-transparent"}`}>
            <div className="navbar container mx-auto">
                <div className="navbar-start">

                    <a className="text-2xl font-bold text-white">TypeTech</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white text-xl">
                            <FaBars />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Button text="ES" background={"#ff5a3d"} icon={<FaAngleDown />} color={"white"} />
                </div>
            </div>
        </nav>
    );
}
