
import Header from "./Header"
import useNowPlaying from "../Hooks/useNowPlaying"
import MainCont from "./MainCont"
import SecCont from "./SecCont"


const Browse = () => {
  useNowPlaying();
  
  return (
    
        <div>
          <Header />
          <MainCont />
          <SecCont />
          </div>
        
    
  )
}
export default Browse