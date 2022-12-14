import React, { useRef, useState } from 'react';
import { auth } from '../utils/firebase.config';


const SignUp = () => {
const registerEmail = useRef();
const registerPassword =useRef();
const [displayName, setDisplayName] = useState("");

const handleRegister = (e) => {
    e.preventDefault();
    try{
        auth
        .createUserWithEmailAndPassword(registerEmail.current.value,registerPassword.current.value)
        .then(async(userAuth)=>{
            await userAuth.user.updateProfile({
                displayName
            })
            window.location.reload();
        })
    }catch (error){
        console.log(error);
    }
}

    return (
<div className="signup-container">
    <div className="signup">
        <form onSubmit={e => handleRegister(e)}>
            <input type="text" placeholder='Pseudo' required onChange={(e)=> setDisplayName(e.target.value)}/>
            <input type="email" placeholder='Email' required ref={registerEmail}/>
            <input type="password" placeholder='Mot de passe' required ref={registerPassword}/>
            <input type="submit" value="Valider l'inscription" />
        </form>
    </div>
</div>
    );
};

export default SignUp;