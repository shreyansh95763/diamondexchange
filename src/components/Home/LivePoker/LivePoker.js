import Img from "./LivePoker.json";
export const LivePoker=()=>{
    return(<>
        <div className="teen-patti-container">
            <div className="teen-patti-heading">Live Poker</div>
            <div className="teen-patti-image-container">
            {
                Img.list.map((val)=>(
                    <img src={val.img} alt="klsaj" />
                ))
            }
            </div>
        </div>
    </>)
}