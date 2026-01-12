import Header from "./Header"
import { bgImg } from "../Utils/Const"
import { useRef, useState } from "react";
import validate from "../Utils/validate";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [errorMsg,setErrorMsg]=useState<string>("");
    const mail=useRef<HTMLInputElement | null>(null);
    const pswd=useRef<HTMLInputElement | null>(null);
    const toggleForm = () => {
        setIsSignedIn(!isSignedIn);
    }
    const handleButtonClick = () => {
        const email=(mail?.current as HTMLInputElement)?.value;
        const password=(pswd?.current as HTMLInputElement)?.value;
        const validationMessage :string=validate(email,password);
        setErrorMsg(validationMessage);
        if (validationMessage !=="") return;
        if(!isSignedIn){
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + " "+ errorMessage);
            });
        }
        else{
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + " "+ errorMessage);
                });

        }
   
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src={bgImg} alt="bgImg" />
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 absolute bg-black/75 text-white my-30 mx-auto left-0 right-0  p-10 rounded-lg">
                <h1 className="text-3xl font-bold my-4" >{isSignedIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignedIn && (<input type="text" 
                    placeholder="Full Name" 
                    className="p-4 
                                my-4 
                                mx-auto 
                                w-full 
                                cursor-pointer 
                                bg-gray-700 
                                rounded-lg"/>)}
                <input 
                    ref={mail}
                    type="text" 
                    placeholder="Email Address" 
                    className="p-4 
                                my-4 
                                mx-auto 
                                w-full 
                                cursor-pointer 
                                bg-gray-700 
                                rounded-lg"/>
                <input  
                    ref={pswd}
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-4 mx-auto w-full cursor-pointer bg-gray-700 rounded-lg"/>
                <p className="text-red-500">{errorMsg}</p>
                <button 
                    type="button"
                    className="p-6 
                                my-4 
                                mx-auto 
                                bg-red-900 
                                rounded-lg 
                                w-full 
                                cursor-pointer"
                    onClick={handleButtonClick}>
                    {isSignedIn ? "Sign In" : "Sign Up"}
                </button>
                <p className="my-4 cursor-pointer" onClick={toggleForm}>
                    {isSignedIn ? "New to Netflix? Sign Up now" : "Already have an account? Sign In"}
                    </p>
            </form>
        </div>
    )
}
export default Login;