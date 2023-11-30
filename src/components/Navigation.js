import Home from "./Home"
import AboutMochi from "./AboutMochi";
import PlayerList from "./PlayerList"
const Navigation = () => {
    return(
      <div className='navigation-bar'>
        <div className='home'>{Home()}</div>
        <div className='about'>{AboutMochi()}</div>
        <div className='player'>{PlayerList()}</div>
        <div>"HELLO FROM NAVIGATION"</div>
      </div>


    )
}

export default Navigation