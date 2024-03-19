import { BetHeader } from "../Header/BetHeader";
import { AsideBody } from "../MainBody/AsideBody";
import { Cricket } from "./Cricket";

function CricketContainer(){
    return(<>
        <BetHeader />
         <div className="body-section">
        <AsideBody />
        <Cricket />
        </div>
    </>)
}
export default CricketContainer;