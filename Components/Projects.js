import React from "react"
import { Image, Carousel, Row, Col } from "react-bootstrap"
import { animated, useSpring } from "react-spring"

const Projects=()=>{
    const [moti,setMoti] = React.useState(true)
    const [domi,setDomi] = React.useState(false)
    const [moti2,setMoti2] = React.useState(true)
    const [domi2,setDomi2] = React.useState(false)
    const fade = useSpring({
        opacity: moti2? 1:0,
        paddingTop: moti2? "0px":"50px",
    })
    const fade2 = useSpring({
        opacity: domi2? 1:0,
        paddingTop: domi2? "0px":"50px",
    })

    const styleDiv = {height:"25vh",overflow:"hidden"}
    const styleImg = {width:"100%",height:"auto"}

    const flip = () =>{
        if(moti){
            setMoti2(false)
            setTimeout(()=>{
                setMoti(false)
                setDomi(true)
                setDomi2(true)
            },300)
        } else if(domi){
            setDomi2(false)
            setTimeout(()=>{
                setMoti2(true)
                setMoti(true)
                setDomi(false)
            },300)
        }
    }

    const arrow = () =>{
        return(
            <Row className="m-0">
                <Col style={{width:"100%", textAlign: "left"}}>
                    <Image className={moti?"choose-active-2":"choose-passive-2"} src="/images/motimanager-logo.png"  roundedCircle onClick={flip}/>
                </Col>
                <Col>
                <a href={moti?"https://motimanager.com":"https://dominaire.nao-mori.com"} target="_blank" rel="noopener noreferrer">
                    <button>Visit</button>
                </a>
                </Col>
                <Col style={{width:"100%", textAlign: "right"}}>
                    <Image className={domi?"choose-active-2":"choose-passive-2"}  src="/images/dominaire-logo.png"  roundedCircle onClick={flip}/>
                </Col>
            </Row>
        )
    }

    return(
        <div className="text-center" style={{minHeight:"100vh"}}>
            <h1>My Personal Projects</h1>
            <div className="container-component">
                <div className="block-left">
                    <div className="chooser">
                        <div>
                            <Image src="/images/motimanager-logo.png" roundedCircle className={"choose "+(moti?"choose-active":"choose-passive box bounce-7")}
                            onClick={flip}/>
                            <h5>2nd Project</h5>
                        </div>
                        <div>
                            <Image src="/images/dominaire-logo.png"  roundedCircle className={"choose "+(domi?"choose-active":"choose-passive box bounce-7")} onClick={flip}/>
                            <h5>1st Project</h5>
                        </div>
                    </div>
                </div>
                <div className="block-right">
                    {moti?
                    
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
                                {arrow()}
                            </div>
                        </div>
                    </animated.div>
                    :domi?
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
                                {arrow()}
                            </div>
                        </div>
                    </animated.div>
                    :null}
                </div>
            </div>
        </div>
    )
}
export default Projects