import React from "react"
import Container from "react-bootstrap/Container"
import { Button } from "react-bootstrap"
//import { Spring, animated } from "react-spring"
import Projects from "./Components/Projects"
import AboutMe from "./Components/AboutMe"
import Contact from "./Components/Contact"
import Background from "./Background"

const App=props=>{
    const [narrow,setNarrow]=React.useState(false)
    const [navshow,setNavshow]=React.useState(false)
    const [pos,setPos]=React.useState(0)
    const [bgcolor,setBgcolor]=React.useState([])
    const projectRef = React.useRef()
    const aboutmeRef = React.useRef()
    const contactRef = React.useRef()
    const top = React.useRef()
    
    //const [anim, setAnim] = React.useState(0)
    const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop)

    React.useEffect(()=>{
        setInterval(()=>{
            if(window.innerWidth<1100) setNarrow(true)
            else setNarrow(false)
            if(aboutmeRef.current.offsetTop<=window.scrollY) setNavshow(true)
            else setNavshow(false)
            let pos = typeof window.orientation==="undefined"?Math.round(window.scrollY/95)+1:Math.round(window.scrollY/60)+1
            let pos2 = typeof window.orientation==="undefined"?Math.round(window.scrollY/150):Math.round(window.scrollY/110)
            if(pos>29) pos=30
            setPos(pos)
            setBgcolor(String(211+pos2)+",233,"+String(235-pos2))
        },100)
    },[props])

    return(
        <div ref={top}>
            <Background pos={pos} bgcolor={bgcolor}/>
            <div className="navback" style={{top:"0%",display:!navshow?"none":null}}>
                <div style={{display: "flex"}}>
                    <img alt="icon" src="/android-icon-36x36.png" onClick={()=>scrollTo(top)} className="pointer"/>
                    <h5 className="navlink" onClick={()=>scrollTo(aboutmeRef)}>About Me</h5>
                    <h5 className="navlink" onClick={()=>scrollTo(projectRef)}>Projects</h5>
                    <h5 className="navlink" onClick={()=>scrollTo(contactRef)}>Contact</h5>
                </div>
            </div>
            <Container className="text-center">
                <div style={{paddingTop:"15vw",height:"100vh"}} className="block">
                    <h1 className="fadein">Hey, I'm Nao Mori.</h1>
                    <button onClick={()=>scrollTo(aboutmeRef)}>Check Me Out</button>
                </div>
            </Container>
            <div ref={aboutmeRef}><AboutMe narrow={narrow}/></div>
            <div ref={projectRef}><Projects/></div>
            <div ref={contactRef}><Contact /></div>
            {narrow?
            <div style={{height:"30vh"}}/>
            :null}
            <footer className="text-center">
            </footer>
        </div>
    )
}

export default App