import React from "react"

const AboutMe=(props)=>{
    const [skills]=React.useState(["HTML","Javascript","React.js"])
    const [skills2]=React.useState(["CSS","Node.js","MongoDB","AWS"])
    return(
        <div className="text-center" style={{height:"100vh"}}>
            <h1>About Me</h1>
            <div className="container-component">
                <div className="block-left">
                    <div>
                        Hi
                    </div>
                </div>
                <div className="block-right" style={{paddingTop:"3vw"}}>
                    <div style={{maxWidth:"500px",padding:"20px"}}>
                    <img alt="profile" src="/images/profile.jpg" className="profile mb-2"/>
                    <h3>Nao Mori</h3>
                    <h5>
                        When React Hooks were released, React was the most popular and most loved front-end framework in the JavaScript ecosystem.
                    </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe