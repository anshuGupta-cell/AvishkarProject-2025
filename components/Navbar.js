"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {

    const pathname = usePathname()

    const active = "underline font-bold underline-offset-1";

    return (
        <nav className="grid bg-gray-200">
            <div className="flex justify-between p-3 gap-3 bg-purple-900">
                <div className="text-xl">
                    <Link href="/">
                        Name
                    </Link>
                </div>
                <div className="flex gap-2">
                   
                </div>
            </div>
            <div className="flex  text-black py-1 px-2 gap-2">
                <Link className={`${pathname === "/" ? active : "" }`} href="/">Home</Link>
                <Link className={`${pathname === "/generate" ? active : "" }`} href="/generate">Generate</Link>
            </div>
        </nav>
    )
}

export default Navbar
