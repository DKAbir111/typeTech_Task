import Button from "./Button"
import { FaAngleDown } from "react-icons/fa6";
export default function Navbar() {
    const links = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Properties</a></li>
        <li><a>Neighborhood</a></li>
        <li><a>Blogs</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <nav className="fixed right-0 left-0">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="text-3xl font-bold text-white">TypeTech</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-semibold">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Button text="ES" background={'#ff5a3d'} icon={<FaAngleDown />} color={'white'} />
                </div>
            </div>
        </nav>
    )
}
