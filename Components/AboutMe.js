import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag } from '@fortawesome/free-solid-svg-icons'


const pink = "#FF8178"
const green = "#7EBF83"

const AboutMe=props=>{
    return(
        <div className="text-center" style={{minHeight:"100vh"}}>
            <h1>About Me</h1>
            <div className="container-component">
                <div className="block-left">
                    <div className="container-skills">
                    <div className="skills">
                       <div className="circle" style={{top:"67.5%",left:"13.5%", backgroundColor: pink}}>
                           <div className="circle-text">HTML</div>
                        </div>
                       <div className="circle" style={{top:"40%",left:"0%", backgroundColor: green}}>
                            <div className="circle-text">CSS</div>
                       </div>
                       <div className="circle" style={{top:"13.5%",left:"13.5%"}}>
                            <div className="circle-text">JavaScript</div>
                       </div>
                       <div className="circle" style={{top:"0%",left:"40%",backgroundColor: pink}}>
                       <div className="circle-text">TypeScript</div>
                       </div>
                       <div className="circle" style={{top:"13.5%",left:"67.5%",backgroundColor: green}}>
                       <div className="circle-text">React.js</div>
                       </div>
                       <div className="circle" style={{top:"40%",left:"80%"}}>
                       <div className="circle-text">Node.js</div>
                       </div>
                       <div className="circle" style={{top:"67.5%",left:"67.5%", backgroundColor: green}}>
                       <div className="circle-text">MongoDB</div>
                       </div>
                       <div className="circle" style={{top:"80%",left:"40%"}}>
                       <div className="circle-text">AWS</div>
                       </div>
                    </div>
                    </div>
                </div>
                <div className="block-right">
                    <div className="block-right-inside">
                        <img alt="profile" src="/images/profile.jpg" className="profile mb-3"/>
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