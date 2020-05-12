import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag } from '@fortawesome/free-solid-svg-icons'
import Image from "./BlurImage"


const pink = "#FF8178"
const green = "#7EBF83"

const AboutMe= ({ pos }) =>{
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        if(pos > 1 && !load) setLoad(true)
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
                        <div style={{height: "300px", marginBottom:"30px"}}>
                            <Image src="/profile.jpg" alt="profile" className="profile" load={load} />
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