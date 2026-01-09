import Header from "./Header"
import { bgImg } from "../Utils/Const"
const Login = () => {
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src={bgImg} alt="bgImg" />
            </div>
            <form className="w-3/12 absolute bg-black/75 text-white my-30 mx-auto left-0 right-0  p-10 rounded-lg">
                <h1 className="text-3xl font-bold my-4" >Sign In</h1>
                <input type="text" placeholder="Email Address" className="p-4 my-4 mx-auto w-full bg-gray-700 rounded-lg"/>
                <input type="password" placeholder="Password" className="p-4 my-4 mx-auto w-full bg-gray-700 rounded-lg"/>
                <button className="p-6 my-4 mx-auto bg-red-900 rounded-lg w-full">Sign In</button>
            </form>
        </div>
    )
}
export default Login