import { useNavigate } from "react-router-dom";
import { nLogo } from "../Utils/Const";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header = () => {
    const user=useSelector(store=>store.user)
    const navigate=useNavigate();
  const handleSignOut=()=>{
    console.log("Signing out");
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}
    return (
        
        <div className="absolute px-8 py-2 bg-linear-to-b from-black w-full z-10 flex justify-between">
            <img src= {nLogo} alt="logo"
            className="w-48 " />
        { user &&(<div className="my-3 mx-10 flex">
          <img className="w-10 h-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKNdKRIgbcMkyGq1cQeq40IA-IQS-FDWnTQ&s" alt="userlogo" />
          <button className="mx-3 bg-red-400 rounded-lg p-2 h-10"
          onClick={handleSignOut}>SIGN OUT</button>
        </div>)}
        </div>
        
        
    )
}
export default Header;