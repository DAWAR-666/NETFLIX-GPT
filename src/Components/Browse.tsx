
import Header from "./Header"
import useNowPlaying from "../Hooks/useNowPlaying"
import MainCont from "./MainCont"
import SecCont from "./SecCont"
import { useSelector } from "react-redux"
import Gpt from "./Gpt"
import type { RootState } from "../Utils/appStore"


const Browse = () => {
  useNowPlaying();
  const gptView=useSelector((store:RootState)=>store.gptview.GptButton);
  
  return (
    
        <div>
          <Header />
          {gptView ? <Gpt /> : <><MainCont /><SecCont /></>}
          
          </div>
        
    
  )
}
export default Browse