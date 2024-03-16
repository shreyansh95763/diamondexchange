import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
export const AsideBody=()=>{
    const [taped1,setTap1] = useState("true");
    const [taped2,setTap2] = useState("true");
    const tapOnOthers=()=>{
        setTap1(!taped1)
    }
    const tapOnAll=()=>{
        setTap2(!taped2);
    }
    return(<>
        <div className="aside-container">
            <div className="aside-main" onClick={tapOnOthers}><span>Others</span> <span>{taped1 ? <ExpandLessIcon style={{fontWeight:"800", fontSize:"2rem"}}/> : <ExpandMoreIcon style={{fontWeight:"800", fontSize:"2rem"}}/>}</span></div>

            {taped1 && <>
            <div className="aside-lists">Dragan Tiger</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            </>}
            
            <div className="aside-main" onClick={tapOnAll}><span>All Sports</span> <span>{taped2 ? <ExpandLessIcon style={{fontWeight:"800", fontSize:"2rem"}}/> : <ExpandMoreIcon style={{fontWeight:"800", fontSize:"2rem"}}/>}</span></div>
            
            {taped2 && <>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            <div className="aside-lists">Bollywood Casino</div>
            </>}

            
        </div>
    </>)
}