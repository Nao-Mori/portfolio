import React from "react"
var arr=[]
for (var i = 1; i < 31; i++) {
    arr.push({name:`/tulip/tulip animation-${i}.png`,opa:0});
}

const Bg=({pos,bgcolor})=>{
    const [bgs]=React.useState(arr)
    return(
        <div>
            <div className="bg" style={{backgroundColor:`rgb(${bgcolor})`}}/>
            {bgs.map((anim,key)=>{
                return(
                    <div key={key} className="icon">
                        <img alt={anim.name} src={anim.name} style={{opacity:key+1===pos?1:0}} className="pic"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Bg