import React from "react"
import { Image } from "react-bootstrap"
import Personality from "./Personality"

const articles = [
    {
        title: "How I Turned my ADHD Tendencies into my Strengths",
        body: " There are good days where you are so focused and spend the entire day being so productive. How"
    },
    {
        title: "Turn your ADHD Tendencies into your Strength",
        body: "2"
    }
]

const Projects = ({ laterLoad }) => {
    return(
        <div className="text-center" style={{minHeight:"100vh"}}>
            <h1>Blog</h1>
            <div className="container-component">
                <div className="block-left" style={{ padding:"0 15px", marginTop: "10px" }}>
                    <Personality laterLoad={laterLoad} />
                    <p/>
                </div>
                <div className="block-right">
                    <div className="block-right-inside blog">
                        <h3 style={{paddingTop:"5px"}}>Top Article</h3>
                    <a href={`https://blog.nao-mori.com/post2`} target="_blank" rel="noopener noreferrer">
                        <div className="shadow"
                            style={{ backgroundColor:"rgb(255,253,249)",color:"black", padding:"10px", borderRadius:"7px" }}
                        >
                            <Image rounded style={{width:"80%"}} src={`/images/blogtop.jpg`}/>
                            <h3 style={{fontWeight:"bolder",marginTop:"20px"}}>
                                How I Turned my ADHD Tendencies <br/> into my Strengths
                            </h3>
                            <h4 style={{padding:"10px 5%", textAlign:"left"}}>
                                {articles[0].body}
                                ...
                            </h4>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects