import "../PerCentLanguage/PercentLanguage.scss";
const PerCentLanguage  = ({lang, percent,colorPercent}) => {
return (
    <>
    
    <div className="LangSkillWrapper">
        <p style={{
            color:`${colorPercent}`,
            width:"70px"
        }}>{lang}</p>
       <div className="styleSkillRange" style={
        {
            width:"70%", 
            border:"1px", 
            borderStyle:"solid", 
            borderColor:`${colorPercent}`
        }
        
       }>
        <div className="RangePercent" 
        style={{
            width:`${percent}`, 
            backgroundColor:`${colorPercent}`
        }}
        ></div>
       </div>
       <p className="percent" style={{
        width:"20px",
        color:`${colorPercent}`,
        marginRight:"10px"
       }}>{percent}</p>
    </div>
    </>
)
}

export default PerCentLanguage 