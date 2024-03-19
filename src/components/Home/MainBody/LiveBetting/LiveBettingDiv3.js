import InfoIcon from '@mui/icons-material/Info';
export const LiveBettingDiv3 = () => {
    return (<>
        <div className="conatiner-left-div1" style={{ marginTop: ".7rem" }}>
            <div className="left-container-heading" style={{ height: "3rem" }}>
                <h5> TIED MATCH</h5>
                <h5><InfoIcon /></h5>
            </div>

            <div className="odd-matches-divs">
                <div className="odd-matches-div2">
                    <div className="odd-matches-left-first"></div>
                    <div className="odd-matches-right-first">
                        <div>Black</div>
                        <div>Lay</div>
                    </div>
                </div>

                <div className="odd-matches-div2">
                    <div className="odd-matches-left">Yes</div>
                    <div className="odd-matches-right">
                        <div>1.57</div>
                        <div>1.17</div>
                        <div>1.07</div>
                        <div>1.07</div>
                        <div>1.07</div>
                        <div>1.07</div>
                    </div>
                </div>

                <div className="odd-matches-div2">
                    <div className="odd-matches-left">No</div>
                    <div className="odd-matches-right">
                        <div>1.57</div>
                        <div>2.17</div>
                        <div>1.07</div>
                        <div>1.07</div>
                        <div>1.07</div>
                        <div>1.07</div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}