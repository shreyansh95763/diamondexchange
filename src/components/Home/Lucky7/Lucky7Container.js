import { BetHeader } from "../Header/BetHeader"
import { AsideBody } from "../MainBody/AsideBody"
import { Lucky7 } from "./Lucky7"

export const Lucky7Container=()=>{
    return(<>
        <BetHeader />
         <div className="body-section">
        <AsideBody />
        <Lucky7 />
        </div>
    </>)
}