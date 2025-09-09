"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton
} from "@clerk/nextjs"

const Navbar = () => {

    const pathname = usePathname()

    const active = "underline font-bold underline-offset-1";

    return (
        <nav className="grid bg-gray-200">
            <div className="flex justify-between p-3 gap-3 bg-purple-900">
                <div className="text-xl grid items-center">
                    <Link href="/">
                        Name
                    </Link>
                </div>
                <div className="flex gap-2 items-center">
                    <SignedOut>
                        <SignInButton />
                        <SignUpButton>
                            <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
            <div className="flex  text-black py-1 px-2 gap-2">
                <Link className={`${pathname === "/" ? active : ""}`} href="/">Home</Link>
                <Link className={`${pathname === "/generate" ? active : ""}`} href="/generate">Generate</Link>
            </div>
        </nav>
    )
}

export default Navbar



