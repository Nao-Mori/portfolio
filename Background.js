import React from "react"
import { animated, useSpring } from "react-spring"

var arr=[]
for (var i = 1; i < 31; i++) {
    arr.push({name:`/tulip/tulip animation-${i}.png`,opa:0});
}

const Bg=({pos,bgcolor,trick})=>{
    const [bgs]=React.useState(arr)

    const fade = useSpring({
        from: {opacity:0},
        opacity: 1
     })

    return(
        <div>
            <div className="bg" style={{backgroundColor:`rgb(${bgcolor})`}}/>
            {bgs.map((anim,key)=>{
                return(
                    <animated.div key={key} className="icon" style={fade}>
                        <img alt={anim.name} src={anim.name} style={{opacity:key+1===pos?1:0}} className="pic"/>
                    </animated.div>
                )
            })}
        </div>
    )
}

export default Bg