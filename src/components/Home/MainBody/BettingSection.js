import { ImageGame } from "./ImageSection/ImageGame"
import { MatchList } from "./MatchList"

export const BettingSection=()=>{
    return(<>
        <div className="betting-section-container">
            <div className="upper-games">
                <div>Football</div>
                <div>Tennis</div>
                <div>Kabaddi</div>
                <div>Cricket</div>
                <div>Horse Racing</div>
                <div>Greyhound Raceing</div>
                <div>Ice Hockey</div>
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
                <div className="game-name">
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

            <MatchList />
            <MatchList />
            <MatchList />
            <MatchList />

            </div>
            <ImageGame />
        </div>
    </>)
}