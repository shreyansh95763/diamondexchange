import { BetHeader } from "../Header/BetHeader";
import { AsideBody } from "../MainBody/AsideBody";
import { Kabaddi } from "./Kabaddi";

function KabaddiContainer(){
    return(<>
        <BetHeader />
         <div className="body-section">
        <AsideBody />
        <Kabaddi />
        </div>
    </>)
}
export default KabaddiContainer;