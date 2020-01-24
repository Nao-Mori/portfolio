import React from "react"

const pink = "#FF8178"
const green = "#7EBF83"

const AboutMe=()=>{
    return(
        <div className="text-center" style={{minHeight:"100vh"}}>
            <h1>About Me</h1>
            <div className="container-component">
                <div className="block-left">
                    <div className="container-skills">
                    <div className="skills">
                       <div className="circle" style={{top:"67.5%",left:"13.5%",backgroundColor:pink}}>
                           <div className="circle-text">HTML</div>
                        </div>
                       <div className="circle" style={{top:"40%",left:"0%",backgroundColor:green}}>
                            <div className="circle-text">CSS</div>
                       </div>
                       <div className="circle" style={{top:"13.5%",left:"13.5%"}}>
                            <div className="circle-text">JavaScript</div>
                       </div>
                       <div className="circle" style={{top:"0%",left:"40%",backgroundColor:green}}>
                       <div className="circle-text">React.js</div>
                       </div>
                       <div className="circle" style={{top:"13.5%",left:"67.5%",backgroundColor:pink}}>
                       <div className="circle-text">Node.js</div>
                       </div>
                       <div className="circle" style={{top:"40%",left:"80%",backgroundColor:green}}>
                       <div className="circle-text">MongoDB</div>
                       </div>
                       <div className="circle" style={{top:"67.5%",left:"67.5%"}}>
                       <div className="circle-text">AWS</div>
                       </div>
                    </div>
                    </div>
                </div>
                <div className="block-right">
                    <div className="block-right-inside">
                    <img alt="profile" src="/images/profile.jpg" className="profile mb-3"/>
                    <h2>Nao Mori</h2>
                    <h5>
                        Full stack web developer that loves eating, traveling and talking.
                    </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe