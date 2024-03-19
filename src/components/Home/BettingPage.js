import { BetHeader } from "./Header/BetHeader"
import { AsideBody } from "./MainBody/AsideBody"
import { LiveCricketBetting } from "./MainBody/LiveBetting/LiveCricketBetting"

export const BetPage=()=>{
    return(<>
         <BetHeader />
         <div className="body-section">
        <AsideBody />
        {/* <BettingSection  /> */}
        <LiveCricketBetting />
        </div>
    </>)
}