import React from "react"
import { Image, Carousel } from "react-bootstrap"
import { animated, useSpring } from "react-spring"

const green = "#7EBF83"
const pink = "#FF8178"

const Projects=()=>{
    const [flip,setFlip] = React.useState(true)
    const fade = useSpring({
        opacity: flip? 1:0,
    })
    const fade2 = useSpring({
        opacity: flip? 0:1,
    })

    const styleDiv = {maxHeight:"250px",overflow:"hidden"}
    const styleImg = {width:"100%",height:"auto"}

    return(
        <div className="text-center" style={{minHeight:"100vh"}}>
            <h1>My Projects</h1>
            <div className="container-component">
                <div className="block-left">
                    <div className="chooser">
                        <div>
                            <Image src="/images/motimanager-logo.png" roundedCircle className={"choose "+(flip?"choose-active":"choose-passive")} onClick={()=>setFlip(true)}/>
                            {!flip?<h5 className="box bounce-7">See me too!</h5>:null}
                        </div>
                        <div>
                            <Image src="/images/dominaire-logo.png"  roundedCircle className={"choose "+(!flip?"choose-active":"choose-passive")} onClick={()=>setFlip(false)}/>
                            <div className="stage"></div>
                            {flip?<h5 className="box bounce-7">See me too!</h5>:null}
                        </div>
                    </div>
                </div>
                <div className="block-right">
                    {flip?
                    <animated.div className="block-right-inside" style={fade}>
                        <div className="uppercard">
                            <Carousel>
                                <Carousel.Item>
                                    <div style={styleDiv}>
                                    <div style={{backgroundColor:"orange", width:"100%",height:"40vw"}}/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div style={styleDiv}>
                                <div style={{backgroundColor:"orange", width:"100%",height:"40vw"}}/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div style={styleDiv}>
                                <div style={{backgroundColor:"orange", width:"100%",height:"40vw"}}/>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="lowercard">
                            <div height="50px">
                            <img src={`/images/motimanager-11.png`} className="project-img"/>
                            </div>
                            <h6 className="mt-4">A fun app that motivates you and manage your tasks. Connect with your friends and compete them on how productive you are!</h6>
                            <div style={{margin:"0 auto",paddingBottom:"20px",textAlign:"center"}}>
                                <div className="container-component">
                                    <div className="circle-small">HTML</div>
                                    <div className="circle-small">CSS</div>
                                    <div className="circle-small">JavaScript</div>
                                    <div className="circle-small">React.js</div>
                                    <div className="circle-small">AWS</div>
                                    <div className="circle-small">Node.js</div>
                                    <div className="circle-small">MongoDB</div>
                                </div>
                            </div>
                            <a href="https://motimanager.com" target="_blank" rel="noopener noreferrer">
                                <button>Visit</button>
                            </a>
                        </div>
                    </animated.div>
                    :
                    <animated.div className="block-right-inside" style={fade2}>
                        <div className="uppercard">
                            <Carousel>
                                <Carousel.Item>
                                    <div style={styleDiv}>
                                    <img
                                    className="d-block"
                                    src="/images/dominaire-screenshot.png"
                                    alt="First slide"
                                    style={styleImg}
                                    />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div style={styleDiv}>
                                    <img
                                    className="d-block"
                                    src="/images/dominaire-screenshot2.png"
                                    alt="Third slide"
                                    style={styleImg}
                                    />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div style={styleDiv}>
                                    <img
                                    className="d-block"
                                    src="/images/dominaire-screenshot3.png"
                                    alt="Third slide"
                                    style={styleImg}
                                    />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="lowercard">
                            <div height="50px">
                            <h1 style={{fontFamily:'Rye',paddingTop:"0"}}>DOMINAIRE</h1>
                            </div>
                            <h6 className="mt-2">3 person strategy board game, occupy the city and be the "Dominaire"!</h6>
                            <div style={{margin:"0 auto",paddingBottom:"20px"}}>
                                <div className="container-component">
                                    <div className="circle-small">HTML</div>
                                    <div className="circle-small">CSS</div>
                                    <div className="circle-small">JavaScript</div>
                                    <div className="circle-small">React.js</div>
                                    <div className="circle-small">AWS</div>
                                </div>
                            </div>
                            <a href="https://dominaire.nao-mori.com" target="_blank" rel="noopener noreferrer">
                                <button>Visit</button>
                            </a>
                        </div>
                    </animated.div>}
                </div>
            </div>
        </div>
    )
}
export default Projects