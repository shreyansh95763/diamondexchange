import Img from "./Lucky7.json";
export const Lucky7=()=>{
    return(<>
        <div className="teen-patti-container">
            <div className="teen-patti-heading">Live Teen Patti</div>
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