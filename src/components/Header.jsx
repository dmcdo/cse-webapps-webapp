import React from 'react';
import SignIn from './SignIn';

function Header() {
    const name = localStorage.getItem("name");

    const logout = function() {
        localStorage.clear();
        window.location.reload();
    }

    let userLogin;
    if (name === null) {
        userLogin = <ul className="userLogin">
            <li> <SignIn /> </li>
            <li> <a href="/">|Sign Up|</a></li> 
        </ul>
    }
    else {
        userLogin = <ul className="userLogin">
            <li>{name}</li>
            <li><button onClick={logout}>Log Out</button></li>
        </ul>
    }

    return <header>
        <a href="/">
        <img src="todologo.png"
            alt="todo list logo"
            float="right"
            width="15%"
            id="logo" />
        </a>
    
        <div>
        <h1>To Do Lists</h1>
        <h2>make your own!</h2>
        </div>
    
        <nav>
            {userLogin}
        </nav>
    </header>
}

export default Header;
