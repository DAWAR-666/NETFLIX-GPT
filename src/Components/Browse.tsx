import useNowPlaying from "../Hooks/useNowPlaying";
import Header from "./Header"


const Browse = () => {
  useNowPlaying();
  
  return (
    
        <div>
          <Header />
          </div>
        
    
  )
}
export default Browse