import { BetHeader } from "../Header/BetHeader"
import { AsideBody } from "../MainBody/AsideBody"
import { Tennis } from "./Tennis"

export const TennisContainer=()=>{
    return(<>
         <BetHeader />
         <div className="body-section">
        <AsideBody />
        <Tennis />
        </div>
    </>)
}