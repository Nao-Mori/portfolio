import React from "react"
import { Container,Button,Image } from "react-bootstrap"

const Projects=props=>{
    const [flip,setFlip] = React.useState(true)
    return(
        <div className="text-center" style={{minHeight:"100vh"}}>
            <h1>My Projects</h1>
            <div className="container-component">
                <div className="block-left">
                    <div className="chooser">
                        <div>
                            <Image src="/images/motimanager-logo.png" roundedCircle className={"choose "+(flip?"choose-active":"choose-passive")} onClick={()=>setFlip(true)}/>
                        </div>
                        <div>
                            <Image src="/images/dominaire-logo.png"  roundedCircle className={"choose "+(!flip?"choose-active":"choose-passive")} onClick={()=>setFlip(false)}/>
                        </div>
                    </div>
                </div>
                <div className="block-right">
                    <div style={{maxWidth:"550px",marginRight:"auto"}}>
                    {flip?
                        <div>
                            <div className="uppercard">
                                <img src="/images/motimanager-11.png" style={{width:"80%",height:"auto"}}/>
                                <h5></h5>
                            </div>
                            <div className="lowercard">
                                <h4>Motimanager</h4>
                                <h5></h5>
                            </div>
                        </div>
                    :
                        <div>
                            <div className="uppercard">
                                <img src="/images/motimanager-11.png" style={{width:"80%",height:"auto"}}/>
                                <h5></h5>
                            </div>
                            <div className="lowercard">
                                <h4>Dominaire</h4>
                                <h5></h5>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects