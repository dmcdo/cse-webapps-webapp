import React from 'react';

function NavButtons() {
    return (
        <nav>
            <ul className="navb">
                <li className="hover:scale-110 transition-all shadow-lg"> <a href="/">Home</a>  </li>
                <li className="hover:scale-110 transition-all shadow-lg"> <a href="/list">My To Do List</a>  </li>
                <li className="hover:scale-110 transition-all shadow-lg"> <a href="/about">About Us</a>  </li>
            </ul>
        </nav>
    )
}

export default NavButtons;
