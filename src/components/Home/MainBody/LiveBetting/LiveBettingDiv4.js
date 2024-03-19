import InfoIcon from '@mui/icons-material/Info';
export const LiveBettingDiv4=()=>{
    return(<>
        <div className="conatiner-left-div1" style={{ display: "flex", marginTop: ".5rem" }}>
            <div className="left-container-div4">
                <div className="left-container-heading">
                    <h5> BOOKMAKER</h5>
                    <h5><InfoIcon /></h5>
                </div>

                <div className="odd-matches-divs">
                    <div className="odd-matches-div2">
                        <div className="odd-matches-left-first" style={{ width: "49%" }}> Min:100 Max:5M</div>
                        <div className="odd-matches-right-first" style={{ width: "60%" }}>
                            <div>Black</div>
                            <div>Lay</div>
                        </div>
                    </div>

                    <div className="odd-matches-div2">
                        <div className="odd-matches-left odd-matches-left-doubles">Yes</div>
                        <div className="odd-matches-right odd-matches-right-doubles">
                            <div>1.57</div>
                            <div>1.17</div>
                            <div>1.07</div>
                            <div>1.07</div>
                            <div>1.07</div>
                            <div>1.07</div>
                        </div>
                    </div>

                    <div className="odd-matches-div2">
                        <div className="odd-matches-left odd-matches-left-doubles">No</div>
                        <div className="odd-matches-right odd-matches-right-doubles">
                            <div>1.57</div>
                            <div>2.17</div>
                            <div>1.07</div>
                            <div>1.07</div>
                            <div>1.07</div>
                            <div>1.07</div>
                        </div>
                    </div>
                    <div className="odd-matches-div2"></div>

                </div>
            </div>
            <div className="right-container-div4">
                <div className="left-container-heading">
                    <h5> BOOKMAKER</h5>
                    <h5><InfoIcon /></h5>
                </div>

                <div className='small-div-container'>
                    <div className='div-box1'>Min:100..</div>
                    <div className='div-box2'>
                        <div>Black</div>
                        <div>Lay</div>
                        <div></div>
                    </div>
                </div>
                <div className='small-div-container'>
                    <div className='div-box1 box1'>Bangladesh</div>
                    <div className='div-box2'>
                        <div>0</div>
                        <div>0</div>
                        <div></div>
                    </div>
                </div>
                <div className='small-div-container'>
                    <div className='div-box1 box1'>Sri Lanka</div>
                    <div className='div-box2'>
                        <div>0</div>
                        <div>0</div>
                        <div></div>
                    </div>
                </div>
                <div className="odd-matches-div2" ></div>

            </div>
        </div>
    </>);
}