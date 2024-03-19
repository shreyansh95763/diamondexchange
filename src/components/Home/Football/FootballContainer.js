import { BetHeader } from "../Header/BetHeader";
import { AsideBody } from "../MainBody/AsideBody";
import { Football } from "./Football";

function FootballContainer(){
    return(<>
        <BetHeader />
         <div className="body-section">
        <AsideBody />
        <Football />
        </div>
    </>)
}
export default FootballContainer;