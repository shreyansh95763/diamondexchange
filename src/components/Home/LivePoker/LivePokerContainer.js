import { BetHeader } from "../Header/BetHeader"
import { AsideBody } from "../MainBody/AsideBody"
import { LivePoker } from "./LivePoker"

export const LivePokerContainer=()=>{
    return(<>
        <BetHeader />
         <div className="body-section">
        <AsideBody />
        <LivePoker />
        </div>
    </>)
}