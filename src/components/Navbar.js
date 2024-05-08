import { Link } from "react-router-dom";

function Navbar() {


    return (
        <nav className="bg-slate-900 p-5 flex flex-col md:flex-row items-center justify-between text-white">
            <h1 className="text-3xl font-bold text-white cursor-pointer mb-6 md:mb-0">Rick & Morty App</h1>

            <div className="flex flex-col items-center md:flex-row justify-between gap-5">
                <Link to='/' className="hover:text-gray-400">Home</Link>
                <Link to='/male' className="hover:text-gray-400">Male Characters</Link>
                <Link to='/female' className="hover:text-gray-400">Female Characters</Link>
            </div>
        </nav>
    )
}

export default Navbar