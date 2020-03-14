import React, { useState } from "react"
import { Image } from "react-bootstrap"

const articles = [
    {
        title: "Turn your ADHD Tendencies into your Strength",
        body: "1"
    },
    {
        title: "Turn your ADHD Tendencies into your Strength",
        body: "2"
    }
]

const Projects = () => {
    const [page, setPage] = useState(0)
    return(
        <div className="text-center" style={{minHeight:"100vh"}}>
            <h1>Blog</h1>
            <div className="container-component">
                <div className="block-left">
                    <div style={{height:"4vw"}}/>
                    <a href="https://blog.nao-mori.com" target="_blank" rel="noopener noreferrer">
                    <div 
                        style={{
                            borderRadius:"50px",maxWidth:"400px",
                            margin:"0 auto",
                            padding:"10px 5px"
                        }}
                        className="blog"
                    >
                    <h2 style={{margin:0, paddingTop:"10px", textDecoration:"none"}}>
                        {/* <img alt="icon" src="/apple-icon-blue.png" style={{width:"30px"}}/>{" "} */}
                        Get to know me more!
                    </h2>
                    <Image roundedCircle src="/images/bloggif.gif" style={{maxWidth:"300px", margin:"10px 0"}} />
                    <h4>Click here to visit</h4>
                    </div>
                    </a>
                    <p/>
                </div>
                <div className="block-right">
                <div className="block-right-inside">
                {/* <div style={{backgroundColor:"rgba(20,0,0,0.4)",color:"white",padding:"30px 10%", borderRadius:"20px"}}> */}
                    <div className="shadow"
                    style={{backgroundColor:"rgb(255,253,249)",color:"black", padding:"10px",borderRadius:"7px", fontFamily:"Franklin Gothic Medium"}}>
                    <Image rounded style={{width:"80%"}} src={`/images/blog${page + 1}.jpg`}/>
                    <h3 style={{fontWeight:"bolder",marginTop:"20px"}}>{articles[page].title}</h3>
                    <h4 style={{padding:"10px 5%", textAlign:"left"}}>{articles[page].body}</h4>
                    <div style={{display:"flex", maxWidth:"450px",margin:"0 auto"}}>
                        <a href={`https://blog.nao-mori.com/post${page + 1}`} target="_blank" rel="noopener noreferrer">
                        <h5 className="link">Read More</h5>
                        </a>
                        {!page?
                        <div onClick={() => setPage(page + 1)} style={{marginLeft:"auto", cursor:"pointer"}}>
                        <h5 className="link">Next Article</h5>
                        </div>
                        :
                        <a href={`https://blog.nao-mori.com`} style={{marginLeft:"auto"}} target="_blank" rel="noopener noreferrer">
                        <h5 className="link" >More Articles</h5>
                        </a>
                        }
                    </div>
                    </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
export default Projects