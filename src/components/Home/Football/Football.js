import { useNavigate } from "react-router-dom"
import { MatchList } from "../MainBody/MatchList"
import "bootstrap/dist/css/bootstrap.min.css";

export const Football=()=>{
    const navigate = useNavigate();
    const navToBetPage=()=>{
        navigate("bet")
    }
    return(<>
          <div className="betting-section-container">
            <div className="upper-games">
               <div className="btn active btn-dark shadow">Football</div>
            </div>
        <div style={{marginTop:"1rem"}}>
            <div className="game-heading">
                <div className="game-heading-div1">Game</div>
                <div className="betting-field">
                    <div>1</div>
                    <div>X</div>
                    <div>2</div>
                </div>
            </div>

            <div className="game-list">
                <div className="game-name" onClick={navToBetPage}>
                    <p>Ball by ball</p>
                </div>
                <div className="result-list">
                    <div>1.5</div>
                    <div>4.7</div>
                    <div>2.5</div>
                    <div>-</div>
                    <div>1.2</div>
                    <div>2.1</div>
                </div>
            </div>

            <MatchList navToBet={navToBetPage} />
            <MatchList navToBet={navToBetPage} />
            <MatchList navToBet={navToBetPage} />
            <MatchList navToBet={navToBetPage} />

            </div>
            {/* <ImageGame /> */}
        </div>
    </>)
}