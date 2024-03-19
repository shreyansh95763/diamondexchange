import { LiveBettingDiv4D } from "./LIveBettingDiv4D";
import { LiveBettingDiv1 } from "./LiveBettingDiv1";
import { LiveBettingDiv2 } from "./LiveBettingDiv2";
import { LiveBettingDiv3 } from "./LiveBettingDiv3";
import { LiveBettingDiv4 } from "./LiveBettingDiv4";
import { LiveBettingDiv5 } from "./LiveBettingDiv5";
import "./LiveCricketBetting.css";
export const LiveCricketBetting = () => {
    return (<>
        <div className="betting-cricket-container">
            <div className="container-left">
                <LiveBettingDiv1 />
                <LiveBettingDiv2 />
                <LiveBettingDiv3 />
                <LiveBettingDiv4D />
                <LiveBettingDiv4 />
                <LiveBettingDiv5 />
                {/* <LiveBettingDiv6 /> */}

                <div className="upper-games">
                    <div>Football</div>
                    <div>Tennis</div>
                    <div>Kabaddi</div>
                    <div>Cricket</div>
                    <div>Horse Racing</div>
                    <div>Greyhound Raceing</div>
                    <div>Ice Hockey</div>
                </div>


            </div>
            <div className="container-right" style={{position:"sticky",top:"0%" }}>
                <div className="left-container-heading" >
                    <h5 style={{ fontWeight: 550, fontSize: "1.1rem" }}>Live Match</h5>
                    <h5>poiuy</h5>
                </div>
                <div className="left-container-heading container-right-mid" >
                    <h5 style={{ fontWeight: 550, fontSize: "1.1rem" }}>Place Bet</h5>
                    <div></div>
                </div>
                <div className="left-container-heading" >
                    <h5 style={{ fontWeight: 550, fontSize: "1.1rem" }}>My Bet</h5>
                    <h5>View More</h5>
                </div>
                <div>
                    <div className="matched-bet-container">
                        <p>Matched Bet</p>
                        <p>Odd</p>
                        <p>Stake</p>
                    </div>
                    <div className="matched-bet-container-div matched-bet-container">
                        <p> Sri Lanka</p>
                        <p> 2.5</p>
                        <p>1000</p>
                    </div>
                </div>

            </div>
        </div >
    </>)
}