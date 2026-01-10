import Header from "./Header"
import { bgImg } from "../Utils/Const"
import { useRef, useState } from "react";
import validate from "../Utils/validate";
const Login = () => {
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
        if (validationMessage===""){
            setErrorMsg("");
        } else {
            setErrorMsg(validationMessage);
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