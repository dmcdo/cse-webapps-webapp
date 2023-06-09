import React, {useState, useEffect} from 'react';
import {auth, provider} from '../../models/firebase'
import {signInWithPopup} from "firebase/auth";

function SignIn() {
    const [value, setValue] = useState("");

    const handleClick = function() {
        signInWithPopup(auth, provider).then((data) => {
            console.log(data);

            setValue(data.user.email);
            localStorage.setItem("name", data.user.displayName);
            window.location.reload();
        });
    }

    useEffect(() => {
        setValue(localStorage.getItem("name"));
    }, []);

    return value ? <></> : <button onClick={handleClick}>Sign In With Google</button>
}

export default SignIn;
