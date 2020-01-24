import React from "react"
import { FormControl } from "react-bootstrap"
import { animated, useSpring } from "react-spring"

var int

const Contact=props=>{
    const [sent,setsent] = React.useState(false)
    const [mail,setmail] = React.useState("")
    const [name,setname] = React.useState("")
    const [message,setmessage] = React.useState("")
    const [incomplete,setincomplete] = React.useState(false)

    const fade = useSpring({
        opacity: incomplete? 1:0,
    })

    const submit=()=>{
        if(mail===""||name===""||message===""){
            setincomplete(true)
            clearTimeout(int)
            int = setTimeout(()=>{
                setincomplete(false)
            },1000)
        } else {
            setsent(true)
        }
    }
    return(
        <div className="text-center" style={{minHeight:"88vh"}}>
            <h1>Contact Me!</h1>
            <div className="container-component">
                <div className="block-left"/>
                <div className="block-right">
                    <div className="block-right-inside">
                        {sent?
                        <div style={{marginTop:"2vw"}}>
                            <h2>Thank You!</h2>
                            <h4 className="pt-3">I'll get back to you soon!</h4>
                            <button className="mt-3" onClick={props.goTop}>
                                Go Back to Top
                            </button>
                        </div>
                        :
                        <div>
                            <div className="position-relative">
                                <label style={mail===""?{fontSize:"23px",top:"-20%"}:{fontSize:"13px",top:"-27%",paddingLeft:"12px"}}>Email</label>
                                <FormControl
                                    type="email"
                                    value={mail}
                                    onChange={event=>setmail(event.target.value)}
                                    style={{marginBottom: "20px", paddingTop:mail===""?"0":"20px",height:"50px",fontSize:"18px",borderRadius:"25px"}}
                                />
                            </div>
                            <div className="position-relative">
                                <label style={name===""?{fontSize:"23px",top:"-20%"}:{fontSize:"13px",top:"-27%",paddingLeft:"12px"}}>Name</label>
                                <FormControl
                                    type="text"
                                    value={name}
                                    onChange={event=>setname(event.target.value)}
                                    style={{marginBottom: "20px", paddingTop:name===""?"0":"20px",height:"50px",fontSize:"18px",borderRadius:"25px"}}
                                />
                            </div>
                            <div className="position-relative">
                                <label style={message===""?{fontSize:"23px",top:"-7%"}:
                                {fontSize:"13px",top:"-11%",width:"90%",textAlign:"left",backgroundColor:"white",borderRadius:"25%",margin:"0 auto",padding:"0",left:"14px"}}>
                                    Message
                                </label>
                                <FormControl
                                    as="textarea" aria-label="With textarea"
                                    rows="5"
                                    type="text"
                                    value={message}
                                    onChange={event=>setmessage(event.target.value)}
                                    style={{marginBottom: "20px", paddingTop:message===""?"8px":"18px",fontSize:"18px",height:"150px",borderRadius:"25px"}}
                                />
                            </div>
                            <button onClick={submit}>
                                Submit
                            </button>
                            <animated.div className="mt-2" style={fade}>
                                Please complete the form.
                            </animated.div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact