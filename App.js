import React from "react"
import { animated, useSpring } from "react-spring"
import Projects from "./Components/Projects"
import AboutMe from "./Components/AboutMe"
import Contact from "./Components/Contact"
import Background from "./Background"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const App=props=>{
    const [navshow,setNavshow]=React.useState(false)
    const [trick,setTrick]=React.useState(false)
    const [pos,setPos]=React.useState(0)
    const [bgcolor,setBgcolor]=React.useState([])
    const [current,setCurrent]=React.useState([])
    
    const projectRef = React.useRef()
    const aboutmeRef = React.useRef()
    const contactRef = React.useRef()
    const top = React.useRef()
    

    const fade = useSpring({
        from: {opacity:0},
        opacity: 1
    })

    const navFade = useSpring({
       opacity: navshow? 1:0,
       top: navshow? "0%": "-5%"
    })
    
    //const [anim, setAnim] = React.useState(0)
    const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop)

    React.useEffect(()=>{
        setInterval(()=>{
            if(aboutmeRef.current.offsetTop<=window.scrollY){
                setNavshow(true)
                if(contactRef.current.offsetTop<=window.scrollY) setCurrent(3)
                else if(projectRef.current.offsetTop<=window.scrollY) setCurrent(2)
                else setCurrent(1)
            }
            else {
                setNavshow(false)
                setCurrent(0)
            }
            if(contactRef.current.offsetTop<=window.scrollY) setTrick(true)
            else setTrick(false)
            let pos = typeof window.orientation==="undefined"?Math.round(window.scrollY/95)+1:Math.round(window.scrollY/60)+1
            let pos2 = typeof window.orientation==="undefined"?Math.round(window.scrollY/100):Math.round(window.scrollY/90)
            if(pos>29) pos=30
            setPos(pos)
            setBgcolor(String(211+pos2)+",233,"+String(235-pos2))
        },100)
    },[props])

    return(
        <div ref={top}>
            <Background pos={pos} bgcolor={bgcolor} trick={trick}/>
            <animated.div className="navback" style={navFade}>
                <div style={{display: "flex"}}>
                    <img alt="icon" src="/android-icon-36x36.png" onClick={()=>scrollTo(top)} className="pointer"/>
                    <h5 className={current===1?"navlink-active navlink":"navlink"}onClick={()=>scrollTo(aboutmeRef)}>About Me</h5>
                    <h5 className={current===2?"navlink-active navlink":"navlink"} onClick={()=>scrollTo(projectRef)}>Projects</h5>
                    <h5 className={current===3?"navlink-active navlink":"navlink"} onClick={()=>scrollTo(contactRef)}>Contact</h5>
                </div>
            </animated.div>
            <div style={{paddingTop:"15vw",height:"100vh", textAlign:"center"}}>
                <animated.h1 style={fade}>Hey, I'm Nao Mori.</animated.h1>
                <button onClick={()=>scrollTo(aboutmeRef)}>Check Me Out</button>
            </div>
            <div ref={aboutmeRef}><AboutMe /></div>
            <div ref={projectRef}><Projects /></div>
            <div ref={contactRef}><Contact goTop={()=>scrollTo(top)} /></div>
            <div className="spacer-bottom"/>
            <footer className="text-center">
                <a href="https://github.com/nao-mori" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="mr-2 brand-icon" size="3x" icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/%E9%A0%86-%E6%A3%AE-878223171/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="ml-2 brand-icon" size="3x" icon={faLinkedin}/>
                </a>
                <div className="pt-2">©Nao Mori 2020</div>
            </footer>
        </div>
    )
}

export default App