import { BetHeader } from "../../Header/BetHeader"
import { AsideBody } from "../AsideBody"
import { TeenPatti } from "./TeenPatti"

export const TeenPattiContainer=()=>{
    return (<>
         <BetHeader />
         <div className="body-section">
        <AsideBody />
        <TeenPatti />
        </div>
    </>)
}