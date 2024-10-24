import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (

        <>

            <div className="bg-sky-800 font-sans text-white">
                <nav className='flex justify-end gap-8 p-4 text-xs mx-72 items-center'>
                    <h1 className='font-bold mx-12 font-sans text-lg text-sky-200'>Tuition Free Education Program on Latest Technologies</h1>
                    <Link href="/home">Home</Link>
                    <Link href="/apply">Apply</Link>
                    <Link href="/jobs">Jobs</Link>
                    <Link href="/Result">Result</Link>
                    <Link href="/Courses">Courses</Link>
                </nav>


            </div>


            <div className='ml-72 -mt-10'>
                <Image src={"/Logo.png"} alt='logo' width={60} height={60} />
            </div>

            <div className=' w-1/2  ml-auto -mt-5'>
        
                <Image src={"/G.Kamran Tessori.png"} alt='Kamran Tessori' width={700} height={700} />
            </div>


        </>
    )


}

export default Navbar