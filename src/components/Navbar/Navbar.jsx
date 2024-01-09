import { signOut, useSession, } from "next-auth/react";
import Link from "next/link";


const Navbar = () => {
    const { data: session } = useSession()

    console.log(session);
    return (
        <div>
            <nav className="flex justify-between items-center bg-black px-12 p-4">
                <div>
                    <h1 className="text-4xl font-semibold text-white bg-gray-500 p-2 rounded-[5px] ">New paper</h1>
                </div>
                <div className="text-white">
                    <Link className="ml-8" href="/all-news">All News</Link>
                    <Link className="ml-8" href="/about">About</Link>
                    <Link className="ml-8" href="/contact">contact</Link>
                    {
                        session?.user? <button className="ml-8" onClick={()=>signOut()}>Logout</button>: <Link className="ml-8" href="/login">Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;