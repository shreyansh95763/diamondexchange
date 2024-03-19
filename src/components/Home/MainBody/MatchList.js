export const MatchList=({navToBet})=>{
    return(<>
        
        <div className="game-list">
                <div className="game-name" onClick={navToBet}>
                    <p><span>Bangladesh v Sri Lanka</span> <span>Mar 15, 2024, 2:00 PM</span> </p>
                    <img alt="kja" src="https://diamonddexch789.com/assets/images/icons/game-icon-d.webp" />
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

            <div className="game-list">
                <div className="game-name" onClick={navToBet}>
                    <p><span>AET Tuskers v North West Dragons</span> <span>Mar 15, 2024, 4:30 PM </span></p>
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

            <div className="game-list">
                <div className="game-name" onClick={navToBet}>
                    <p><span>New Zealand T10 v South Africa T10 </span> <span>Mar 15, 2024, 5:30 PM </span></p>
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
    </>)
}