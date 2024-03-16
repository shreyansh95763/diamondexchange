import Img from "./Image.json"
export const ImageGame=()=>{
    return(<>
    <div className="image-lists-container">
    {   Img.list.map((img)=>(
        <div className="image-list">
        <img alt="images" src={img.img} />
        <div>BALL BY BALL</div>
    </div>))}
</div>
    </>)
}