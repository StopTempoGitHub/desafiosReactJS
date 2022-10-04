import CartWidget from '../CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <NavLink className="nav__link btn btn-ghost normal-case text-xl mr-5" to='/'>2da PreEntrega del Proyecto</NavLink>
                <ul>
                    <li>
                        <NavLink className="nav__link btn btn-square btn-ghost px-8" to='/categoria/anime'>Anime</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link btn btn-square btn-ghost px-8" to='/categoria/juegos'>Juegos</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-none">
                <NavLink className="nav__link btn btn-square btn-ghost" to='cart'>
                    <CartWidget />
                </NavLink>
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>
    );
}

export default NavBar;