import { useState } from "react";
import { ImageGame } from "./ImageSection/ImageGame"
import { MatchList } from "./MatchList";
import { useNavigate } from "react-router-dom";

export const BettingSection=()=>{
    const navigate = useNavigate();
    const [style,setStyle] = useState({
        cricket:{backgroundColor:"#2c3e50",color:"white"},
    })

    const navToBetPage=()=>{
        navigate("/bet")
    }
    const moveToButtons=(page)=>{
        setStyle({
            [page]:{backgroundColor:"#2c3e50",color:"white"}
        })
        if(page === "football") {navigate("/FOOTBALL")}
        if(page === "cricket") {navigate("/CRICKET")}
        if(page === "tennis") {navigate("/TENNIS")}
        if(page === "kabaddi") {navigate("/KABADDI")}
        
    }
    return(<>
        <div className="betting-section-container">
            <div className="upper-games">
                <div style={style.football} onClick={()=>{moveToButtons("football")}}>Football</div>
                <div style={style.tennis}  onClick={()=>{moveToButtons("tennis")}} >Tennis</div>
                <div style={style.kabaddi}  onClick={()=>{moveToButtons("kabaddi")}} >Kabaddi</div>
                <div style={style.cricket}  onClick={()=>{moveToButtons("cricket")}} >Cricket</div>
                <div style={style.HRacing}  onClick={()=>{moveToButtons("HRacing")}} >Horse Racing</div>
                <div style={style.GRacing}  onClick={()=>{moveToButtons("GRacing")}} >Greyhound Racing</div>
                <div style={style.IceHockey}  onClick={()=>{moveToButtons("IceHockey")}} >Ice Hockey</div>
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
            <ImageGame />
        </div>
    </>)
}