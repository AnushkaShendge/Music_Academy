"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

const page = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4 mt-20">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Contact Us
            </h1>
            
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                We&apos;re here to help with any questions about our courses,
                programs, or events. Reach out and let us know how we can assist you
                in your musical journey.
            </p>
            <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="rounded-md border p-6 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full m-4 h-10 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            />
            <input
              type="email"
              placeholder="john@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md border p-6 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full m-4 h-10 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            />
            </div>
            </div>
            <div className="mt-10 text-center">
                <Link href={"/courses"}
                className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                Submit
                </Link>
            </div>
          <BackgroundBeams />
        </div>
    );
}

export default page
