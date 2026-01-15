import { useNavigate } from "react-router-dom";
import { nLogo, userLogo } from "../Utils/Const";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptButton } from "../Utils/gptSlice";
const Header = () => {
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user)
    const showgptbtn=useSelector(store=>store.gptview.GptButton)
    const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const handleGptPage=()=>{
    dispatch(toggleGptButton());
  }
useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid , email ,displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser(null));
                navigate("/");
            }
            });
            return ()=>unsubscribe();
    },[])
    return (
        
        <div className="absolute px-8 py-2 bg-linear-to-b from-black w-full z-10 flex justify-between">
            <img src= {nLogo} alt="logo"
            className="w-48 " />
        { user &&(<div className="my-3 mx-10 flex">
          <button className="mx-3 bg-red-400 rounded-lg p-2 h-10 cursor-pointer"
              onClick={handleGptPage}>
              {showgptbtn ? "HOME" : "GPT Search"}
            </button>
          <img className="w-10 h-10 cursor-pointer" src={userLogo} alt="userlogo" />
          <button className="mx-3 bg-red-400 rounded-lg p-2 h-10 cursor-pointer"
          onClick={handleSignOut}>SIGN OUT</button>
        </div>)}
        </div>
        
        
    )
}
export default Header;