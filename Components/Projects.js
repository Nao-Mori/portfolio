import React, { useState } from "react"
import { Image, Carousel, Row, Col } from "react-bootstrap"
import { animated, useSpring } from "react-spring"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { datas } from "./projectData"

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
                {project.src !== "seasurvival" && project.src !== "themayor"? 
                    <a href={`https://github.com/Nao-Mori/${project.src}`} target="_blank" rel="noopener noreferrer">
                        <button className="green mt-2">Github</button>
                    </a>
                :null}
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
                                        src = {`/images/${data.src}-logo.png`}
                                        roundedCircle
                                        className={"choose "+(project.name ===  data.name? "choose-active":"choose-passive")}
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
                                    <Carousel style={{color:"black",backgroundColor:"black"}}  className="slide-pic">
                                        {project.screenshot.map((screenshot, key)=>{
                                            return(
                                                <Carousel.Item key={key}>
                                                    <div>
                                                        {laterLoad?
                                                            <img
                                                            className="d-block"
                                                            src = {`/images/screenshots/${project.src}-screenshot${screenshot}.jpg`}
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
                                    {project.name === "Motimanager" ?
                                        <img src={`/images/motimanager-11.png`} alt="motimanager" className="project-img"/>
                                    :
                                        <h1 style={{ padding: 0 }}>{project.name}</h1>
                                    }
                                </div>
                                <h6 className="mt-3">
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