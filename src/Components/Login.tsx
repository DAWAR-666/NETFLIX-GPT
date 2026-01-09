import Header from "./Header"
import { bgImg } from "../Utils/Const"
import { useState } from "react";
const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const toggleForm = () => {
        setIsSignedIn(!isSignedIn);
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
                <input type="text" 
                    placeholder="Email Address" 
                    className="p-4 
                                my-4 
                                mx-auto 
                                w-full 
                                cursor-pointer 
                                bg-gray-700 
                                rounded-lg"/>
                <input type="password" placeholder="Password" className="p-4 my-4 mx-auto w-full cursor-pointer bg-gray-700 rounded-lg"/>
                <button className="p-6 my-4 mx-auto bg-red-900 rounded-lg w-full cursor-pointer">{isSignedIn ? "Sign In" : "Sign Up"}</button>
                <p className="my-4 cursor-pointer" onClick={toggleForm}>
                    {isSignedIn ? "New to Netflix? Sign Up now" : "Already have an account? Sign In"}
                    </p>
            </form>
        </div>
    )
}
export default Login