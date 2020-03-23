import React from "react"
import { animated, useSpring } from "react-spring"
import Projects from "./Components/Projects"
import AboutMe from "./Components/AboutMe"
import Contact from "./Components/Contact"
import Blog from "./Components/Blog"
import Background from "./Background"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

import { Link, Element } from 'react-scroll'

const scrollDuration = 400

const App = props => {
    const [navshow,setNavshow]=React.useState(false)
    const [trick,setTrick]=React.useState(false)
    const [pos,setPos]=React.useState(0)
    const [bgcolor,setBgcolor]=React.useState([])
    const [current,setCurrent]=React.useState([])
    const [laterLoad,setLaterLoad]=React.useState(false)
    
    const projectRef = React.useRef()
    const aboutmeRef = React.useRef()
    const blogRef = React.useRef()
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
    
    const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop)

    React.useEffect(()=>{
        setInterval(()=>{
            if(aboutmeRef.current.offsetTop<=window.scrollY){
                if(!laterLoad) setLaterLoad(true)
                setNavshow(true)
                if(contactRef.current.offsetTop<=window.scrollY) {
                    setCurrent(4)
                    document.title="Nao Mori | Contact"
                }
                else if(blogRef.current.offsetTop<=window.scrollY) {
                    setCurrent(3)
                    document.title="Nao Mori | Blog"
                }
                else if(projectRef.current.offsetTop<=window.scrollY) {
                    setCurrent(2)
                    document.title="Nao Mori | Projects"
                }
                else {
                    setCurrent(1)
                    document.title="Nao Mori | About Me"
                }
            }
            else {
                setNavshow(false)
                setCurrent(0)
                document.title="Nao Mori"
            }
            if(contactRef.current.offsetTop<=window.scrollY) setTrick(true)
            else setTrick(false)
            let pos = typeof window.orientation==="undefined"?Math.round(window.scrollY/95)+1:30
            let pos2 = typeof window.orientation==="undefined"?Math.round(window.scrollY/100):Math.round(window.scrollY/93)
            if(pos>29) pos=30
            else if(pos<1) pos=1
            setPos(pos)
            setBgcolor(String(211+pos2)+",233,"+String(235-pos2))
        },100)
    },[props])

    return(
        <div ref={top} name="top">
            <Background pos={pos} bgcolor={bgcolor} trick={trick}/>
            <animated.div className="navback" style={navFade}>
                <div style={{display: "flex"}}>
                    <Link activeClass="active" to="top" spy={false} smooth={true} offset={0} duration={scrollDuration}>
                        <img alt="icon" src="/android-icon-36x36.png" style={{width:"30px",height:"30px",marginLeft:"15px"}} className="pointer"/>
                    </Link>
                    <Link activeClass="active" to="aboutme" spy={false} smooth={true} offset={0} duration={scrollDuration}>
                        <h5 className={current===1?"navlink-active navlink":"navlink"}>About Me</h5>
                    </Link>
                    <Link activeClass="active" to="project" spy={false} smooth={true} offset={0} duration={scrollDuration}>
                        <h5 className={current===2?"navlink-active navlink":"navlink"}>Projects</h5>
                    </Link>
                    <Link activeClass="active" to="blog" spy={false} smooth={true} offset={0} duration={scrollDuration}>
                        <h5 className={current===3?"navlink-active navlink":"navlink"}>Blog</h5>
                    </Link>
                    <Link activeClass="active" to="contact" spy={false} smooth={true} offset={0} duration={scrollDuration}>
                        <h5 className={current===4?"navlink-active navlink":"navlink"}>Contact</h5>
                    </Link>
                </div>
            </animated.div>
            <div style={{paddingTop:"15vw",height:"100vh", textAlign:"center"}}>
                <animated.h1 style={fade}>Hey, I'm Nao Mori.</animated.h1>
                <Link activeClass="active" to="aboutme" spy={false} smooth={true} offset={0} duration={scrollDuration}>
                    <button>Check Me Out</button>
                </Link>
            </div>
            <div ref={aboutmeRef} name="aboutme"><AboutMe /></div>
            
            <div ref={projectRef} name="project"><Projects laterLoad={laterLoad} /></div>

            <div ref={blogRef} name="blog"><Blog laterLoad={laterLoad} /></div>
            <div ref={contactRef} name="contact"><Contact goTop={()=>scrollTo(top)} /></div>
            <div className="spacer-bottom"/>
            <footer className="text-center">
                <a href="https://github.com/nao-mori/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="mr-4 brand-icon" size="3x" icon={faGithub}/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100012798553121" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="brand-icon" size="3x" icon={faFacebook}/>
                </a>
                <a href="https://www.linkedin.com/in/nao-mori-878223171/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="ml-4 brand-icon" size="3x" icon={faLinkedin}/>
                </a>
                <div className="pt-2">©Nao Mori 2020</div>
            </footer>
            <Element name="test1"/>
        </div>
    )
}

export default App