import React from "react";

// import navigation data
import { navigation } from '../data';

// impor tlink
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <nav>
            <ul className='flex space-x-8 capitalize text-[15px]'>
                {navigation.map((item, index) => {
                    return (
                        <li className='text-white hover:textpaccent cursor-pointer' key={index}>
                            <Link to={item.href} activeClass='active' spy={true} smooth={true} duration={500} offset={-70}
                            className='transition-all duration-300'>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;