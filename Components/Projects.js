import React, { useState } from "react"
import { Image, Carousel, Row, Col } from "react-bootstrap"
import { animated, useSpring } from "react-spring"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const datas = [
    {
        name: "Motimanager",
        description: "A fun app that motivates you and manages your tasks. Connect with your friends and compete with them on how productive you are!",
        skills: ["HTML", "CSS", "React.js"],
        url: "motimanager.com/demo",
        src: "motimanager-logo",
        screenshot: [1,2,3,4],
        position: [0, 10]
    },
    {
        name: "Eat in Kyoto",
        description: 'description for sea survival',
        skills: ["HTML", "CSS", "React.js"],
        url: "eatinkyoto.nao-mori.com",
        src: "eatinkyoto-logo",
        screenshot: [1,2,3],
        position: [0, 37]
    },
    {
        name: "Artikel",
        description: 'description for sea survival',
        skills: ["HTML", "CSS", "React.js"],
        url: "artikel.nao-mori.com",
        src: "artikel-logo",
        screenshot: [1,2,3],
        position: [0, 64]
    },
    {
        name: "Dominaire",
        description: '3 person strategy board game, occupy the city and be the "Dominaire"!',
        skills: ["HTML", "CSS", "React.js"],
        url: "dominaire.nao-mori.com",
        src: "dominaire-logo",
        screenshot: [1,2,3],
        position: [50, 10]
    },
    {
        name: "Sea Survival",
        description: 'description for sea survival',
        skills: ["HTML", "CSS", "React.js"],
        url: "seasurvival.nao-mori.com",
        src: "seasurvival-logo",
        screenshot: [1,2,3],
        position: [50, 37]
    }
]

let current = 0

const Projects = ({laterLoad}) => {
    const [project, setProject] = useState(datas[0])
    const [pushed, setPushed] = useState(false)

    const fade = useSpring({
        opacity: pushed? 0 : 1,
        paddingTop: pushed? "30px" : "0px"
    })

    const styleImg = {width:"100%",height:"auto"}

    const flip = num =>{
        if(num !== current){
            setPushed(true)
            current = num === datas.length? 0 : num === -1? datas.length - 1 : num
            setTimeout(()=>{
                setPushed(false)
                setProject(datas[current])
            },400)
        }
    }

    const arrow = () =>{
        return(
            <Row className="m-0">
                <Col style={{width:"100%", textAlign: "left", padding: 0}}>
                    <FontAwesomeIcon className="arrow-button" icon={faArrowCircleLeft}  onClick={()=>flip(current - 1)}/>
                </Col>
                <Col>
                <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
                    <button>Visit</button>
                </a>
                <a href={"https://github.com/Nao-Mori/"} target="_blank" rel="noopener noreferrer">
                    <button className="green mt-2">Github</button>
                </a>
                </Col>
                <Col style={{width:"100%", textAlign: "right", padding: 0}}>
                    <FontAwesomeIcon className="arrow-button" icon={faArrowCircleRight} onClick={()=>flip(current + 1)}/>
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
                        {datas.map((data, key)=>{
                            return(
                                <div style={{ position: "absolute", top:`${data.position[0]}%`, left: `${data.position[1]}%`, width:"25%" }} key={key}>
                                    <Image
                                        src = {`/images/${data.src}.png`}
                                        roundedCircle
                                        className={"choose "+(project.name ===  data.name? "choose-active":"choose-passive box bounce-7")}
                                        onClick={()=>flip(key)}
                                    />
                                    <h5>{data.name}</h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="block-right">
                    <animated.div style={fade} className="block-right-inside">
                        <div className="shadow">
                            <div className="uppercard">
                                <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
                                    <Carousel style={{color:"black",backgroundColor:"black"}}>
                                        {project.screenshot.map((screenshot, key)=>{
                                            return(
                                                <Carousel.Item key={key}>
                                                    <div className="slide-pic">
                                                        {laterLoad?
                                                            <img
                                                            className="d-block"
                                                            src = {`/images/${project.name}-screenshot${screenshot}.jpg`}
                                                            alt = {project.name}
                                                            style={styleImg}
                                                            />
                                                        :null}
                                                    </div>
                                                </Carousel.Item>
                                            )
                                        })}
                                    </Carousel>
                                </a>
                            </div>
                            <div className="lowercard">
                                <div height="50px">
                                    <img src={`/images/motimanager-11.png`} alt="motimanager" className="project-img"/>
                                </div>
                                <h6 className="mt-4">
                                    {project.description}
                                </h6>
                                <div style={{margin:"0 auto",paddingBottom:"20px",textAlign:"center"}}>
                                    <div className="container-component">
                                        {project.skills.map((skill, key)=>{
                                            return <div key={key} className="circle-small">{skill}</div>
                                        })}
                                    </div>
                                </div>
                                {arrow()}
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}
export default Projects