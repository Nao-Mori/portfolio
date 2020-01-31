import React from "react"
import { Image, Carousel } from "react-bootstrap"
import { animated, useSpring } from "react-spring"

const Projects=()=>{
    const [flip,setFlip] = React.useState(true)
    const fade = useSpring({
        opacity: flip? 1:0,
    })
    const fade2 = useSpring({
        opacity: flip? 0:1,
    })

    const styleDiv = {height:"25vh",overflow:"hidden"}
    const styleImg = {width:"100%",height:"auto"}

    return(
        <div className="text-center" style={{minHeight:"100vh"}}>
            <h1>My Projects</h1>
            <div className="container-component">
                <div className="block-left">
                    <div className="chooser">
                        <div className={!flip?"box bouce7":null}>
                            <Image src="/images/motimanager-logo.png" roundedCircle className={"choose "+(flip?"choose-active":"choose-passive box bounce-7")} onClick={()=>setFlip(true)}/>
                            {!flip?<h5 className="box bounce-7">See me too!</h5>:null}
                        </div>
                        <div>
                            <Image src="/images/dominaire-logo.png"  roundedCircle className={"choose "+(!flip?"choose-active":"choose-passive box bounce-7")} onClick={()=>setFlip(false)}/>
                            {flip?<h5 className="box bounce-7">See me too!</h5>:null}
                        </div>
                    </div>
                </div>
                <div className="block-right">
                    {flip?
                    
                    <animated.div className="block-right-inside" style={fade}>
                        <div className="shadow">
                            <div className="uppercard">
                                <Carousel  style={{color:"black",backgroundColor:"black"}}>
                                    <Carousel.Item>
                                        <div style={styleDiv}>
                                            <img
                                            className="d-block"
                                            src="/images/motimanager-screenshot.png"
                                            alt="First slide"
                                            style={styleImg}
                                            />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div style={styleDiv}>
                                            <img
                                            className="d-block"
                                            src="/images/motimanager-screenshot2.png"
                                            alt="Second slide"
                                            style={styleImg}
                                            />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div style={styleDiv}>
                                            <img
                                            className="d-block"
                                            src="/images/motimanager-screenshot3.png"
                                            alt="Third slide"
                                            style={styleImg}
                                            />
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="lowercard">
                                <div height="50px">
                                <img src={`/images/motimanager-11.png`} alt="motimanager" className="project-img"/>
                                </div>
                                <h6 className="mt-4">
                                    A fun app that motivates you and manages your tasks. Connect with your friends and compete them on how productive you are!
                                </h6>
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
                        </div>
                    </animated.div>
                    :
                    <animated.div className="block-right-inside" style={fade2}>
                        <div className="shadow">
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
                                <h1 style={{fontFamily:'Rye',paddingTop:"0",fontWeight:"lighter"}}>DOMINAIRE</h1>
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
                        </div>
                    </animated.div>}
                </div>
            </div>
        </div>
    )
}
export default Projects