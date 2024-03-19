import { AsideBody } from "./AsideBody"
// import { LiveCricketBetting } from "./LiveBetting/LiveCricketBetting"
import { BettingSection } from "./BettingSection"

export const HomeBody=()=>{
    return(<>
    
      <div className="body-section">
        <AsideBody />
        <BettingSection  />
        {/* <LiveCricketBetting /> */}
        </div>
    </>)
}