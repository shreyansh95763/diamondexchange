import Img from "./teenPattin.json";
export const TeenPatti=()=>{
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