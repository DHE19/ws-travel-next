import React, { useState } from 'react';

import Link from "next/link"


const defaultPx = ' px-4 md:px-14 lg:px-10 xl:px-20'


const Navbar = ({navItems,children,pX}) => {
    const [showMenu, setShowMenu] = useState(true);
    const [extraClass, setExtraClass] = useState('');

    const handleClick = () =>{
        setExtraClass(`${showMenu ? 'show-menu':'hide-menu'}`);
        setShowMenu(!showMenu);

    }

    const handleResize= () =>{
        if(window.innerWidth > 1024) setExtraClass('');
    }

    React.useEffect(() =>{
        window.addEventListener('resize',handleResize);
    },[])

    return (
        <div className="bg-sky-500 py-3 text-white z-20">
            <nav className={`flex justify-between items-center gap-4 container mx-auto  ${pX ?? defaultPx}`}>
                <div className="text-3xl font-bold justify-start">
                    <span>TourTravel</span>
                </div>
                <div className={`nav-items ${extraClass}`}>
                    <ul className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-4 xl:gap-10  items-center">
                        {navItems.map(i => (
                            <li key={i.name} className='nav-item'>
                            <Link href={i.link}>
                                {i.name}
                            </Link>
                        </li>    
                            ))}
                    </ul>
                    {children ?? null}
                </div>
                <div 
                onClick={handleClick}
                className='font-bold cursor-pointer lg:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                         <path strokeLinecap="round"    strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                </div>  

            </nav>
        </div>
    )
}

export default Navbar
