import React from "react"
import { Image } from "react-bootstrap"

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
                    <div className="block-right-inside">
                    {flip?
                        <div>
                            <div className="uppercard">

                            </div>
                            <div className="lowercard">
                                <img src="/images/motimanager-11.png" style={{width:"80%",height:"auto",maxWidth:"300px"}}/>
                                <br/>
                                <a href="https://motimanager.com" target="_blank">
                                    <button>Visit</button>
                                </a>
                            </div>
                        </div>
                    :
                        <div>
                            <div className="uppercard">

                            </div>
                            <div className="lowercard">
                                <img src="/images/dominaire-11.png" style={{width:"80%",height:"auto",maxWidth:"300px"}}/>
                                <br/>
                                <a href="https://dominaire.nao-mori.com" target="_blank">
                                    <button>Visit</button>
                                </a>
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