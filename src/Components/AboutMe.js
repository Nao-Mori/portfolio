import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag } from '@fortawesome/free-solid-svg-icons'
import Image from "./BlurImage"


const pink = "#FF8178"
const green = "#7EBF83"

const AboutMe= ({ pos }) =>{
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        if(pos > 4 && !load) setLoad(true)
    },[pos])
    return(
        <div className="text-center" style={{minHeight:"100vh"}}>
            <h1>About Me</h1>
            <div className="container-component">
                <div className="block-left">
                    <div className="container-skills">
                    <div className="skills">
                       <div className="circle" style={{top:"67.5%",left:"13.5%", backgroundColor: pink}}>
                           <div>HTML</div>
                        </div>
                       <div className="circle" style={{top:"40%",left:"0%", backgroundColor: green}}>
                            <div>CSS</div>
                       </div>
                       <div className="circle" style={{top:"13.5%",left:"13.5%"}}>
                            <div>JavaScript</div>
                       </div>
                       <div className="circle" style={{top:"0%",left:"40%",backgroundColor: pink}}>
                       <div>TypeScript</div>
                       </div>
                       <div className="circle" style={{top:"13.5%",left:"67.5%",backgroundColor: green}}>
                       <div>React.js</div>
                       </div>
                       <div className="circle" style={{top:"40%",left:"80%"}}>
                       <div>Node.js</div>
                       </div>
                       <div className="circle" style={{top:"67.5%",left:"67.5%", backgroundColor: green}}>
                       <div>MongoDB</div>
                       </div>
                       <div className="circle" style={{top:"80%",left:"40%"}}>
                       <div>AWS</div>
                       </div>
                    </div>
                    </div>
                </div>
                <div className="block-right">
                    <div className="block-right-inside">
                        <div style={{width: "300px", marginBottom:"30px", marginLeft: "auto", marginRight: "auto" }}>
                            <Image
                            src="/profile.jpg"
                            alt="profile"
                            className="profile"
                            load={load}
                            src64={`data:image/jpeg;base64,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`} />
                        </div>
                        <h2>Nao Mori</h2>
                        <h5 className="mb-3">
                            I'm a Web Developer. I have serious passion for creating responsive web apps that are easy to use, fast and fun.
                        </h5>
                        <div style={{fontSize:"20px"}}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{color:green}}/> Düsseldorf/Germany
                        <FontAwesomeIcon icon={faFlag} style={{color: pink, marginLeft:"15px"}}/> Kyoto/Japan
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe