import React from "react"
import { animated, useSpring } from "react-spring"

var arr=[]
for (var i = 1; i < 31; i++) {
    arr.push({name:`/tulip/tulip animation-${i}.png`,opa:0});
}

const Bg=({ pos,bgcolor })=>{
    const [bgs]=React.useState(arr)

    const fade = useSpring({
        from: {opacity:0},
        opacity: 1,
        zIndex: -1
     })

     const bgStyle={
        position: "fixed",
        zIndex: "-2",
        height: "100vh",
        width: "100vw",
        background:`${bgcolor}`   
    }

    return(
        <div>
            <div style={bgStyle}/>
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