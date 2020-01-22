import React from "react"
import {Container, FormControl,Button} from "react-bootstrap"

const Contact=({narrow})=>{
    const [sent,setsent]=React.useState(false)
    const [mail,setmail]=React.useState("")
    const [name,setname]=React.useState("")
    const [message,setmessage]=React.useState("")
    const [incomplete,setincomplete]=React.useState("")

    // const keydown=event=>{
    //     if (event.keyCode === 13 && event.shiftKey === false) {
    //         submit();
    //       }
    // }
    const submit=()=>{
        if(mail===""||name===""||message===""){
            setincomplete("Please complete the form.")
        } else {
            setsent(true)
        }
    }
    return(
        <div className="text-center" style={{height:"88vh"}}>
            <h1>Contact Me!</h1>
            <div className="container-component">
                <div className="block-left"/>
                <div className="block-right">
                    <div style={{maxWidth:"500px"}}>
                        {sent?
                        <div>
                            <h1>Thank You!</h1>
                            <h3>Email: {mail}</h3>
                            <h3>Name: {name}</h3>
                            <h3>Message: {message}</h3>
                        </div>
                        :
                        <div>
                            <div className="position-relative">
                                <label style={mail===""?{fontSize:"23px",top:"-20%"}:{fontSize:"13px",top:"-27%",paddingLeft:"12px"}}>Email</label>
                                <FormControl
                                    type="email"
                                    value={mail}
                                    onChange={event=>setmail(event.target.value)}
                                    style={{marginBottom: "20px", paddingTop:mail===""?"0":"20px",height:"50px",fontSize:"18px"}}
                                />
                            </div>
                            <div className="position-relative">
                                <label style={name===""?{fontSize:"23px",top:"-20%"}:{fontSize:"13px",top:"-27%",paddingLeft:"12px"}}>Name</label>
                                <FormControl
                                    type="text"
                                    value={name}
                                    onChange={event=>setname(event.target.value)}
                                    style={{marginBottom: "20px", paddingTop:name===""?"0":"20px",height:"50px",fontSize:"18px"}}
                                />
                            </div>
                            <div className="position-relative">
                                <label style={message===""?{fontSize:"23px",top:"-7%"}:{fontSize:"13px",top:"-10%",paddingLeft:"12px",width:"90%",backgroundColor:"white",textAlign:"left",margin:"0 2px"}}>Message</label>
                                <FormControl
                                    as="textarea" aria-label="With textarea"
                                    rows="5"
                                    type="text"
                                    value={message}
                                    onChange={event=>setmessage(event.target.value)}
                                    style={{marginBottom: "20px", paddingTop:message===""?"8px":"18px",fontSize:"18px",height:"150px"}}
                                />
                            </div>
                            <button onClick={submit}>
                                Submit
                            </button>
                            {incomplete}
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact