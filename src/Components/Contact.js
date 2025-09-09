/* global Email */
import React from 'react';
import { FormControl, Spinner } from 'react-bootstrap';
import { animated, useSpring } from 'react-spring';

var int;

const Contact = (props) => {
  const [sent, setsent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [mail, setmail] = React.useState('');
  const [name, setname] = React.useState('');
  const [message, setmessage] = React.useState('');
  const [incomplete, setincomplete] = React.useState(false);

  const fade = useSpring({
    opacity: incomplete ? 1 : 0,
  });

  const submit = () => {
    if (!mail || !name || !message) {
      setincomplete(true);
      clearTimeout(int);
      int = setTimeout(() => {
        setincomplete(false);
      }, 1000);
    } else {
      setSending(true);
      Email.send({
        Host: "smtp.gmail.com",
        Username: "lockn980@gmail.com",
        Password: "tymhyplfrjyohrfr",
        To: "lockn980@gmail.com",
        From: mail,
        Subject: `Portfolio Contact from ${name}`,
        Body: `
          <b>Name:</b> ${name} <br/>
          <b>Email:</b> ${mail} <br/>
          <b>Message:</b><br/> ${message}
        `
      }).then(() => {
        alert(`Currently down... please contact me by email: contact.naomori@gmail.com`)
        setsent(true)
      }).catch((err)=>console.log(err));
    }
  };

  return (
    <div className="text-center" style={{ minHeight: '88vh' }}>
      <h1>Contact Me!</h1>
      <div className="container-component">
        <div className="block-left"></div>
        <div className="block-right">
          <div className="block-right-inside">
            {sent ? (
              <div style={{ marginTop: '2vw' }}>
                <h2>Thank You!</h2>
                <h4 className="pt-3">I'll get back to you soon!</h4>
                <button className="mt-3" onClick={props.goTop}>
                  Go Back to Top
                </button>
              </div>
            ) : (
              <div>
                <div className="position-relative">
                  <label
                    style={
                      !mail
                        ? { fontSize: '23px', top: '-20%', paddingLeft: '18px' }
                        : { fontSize: '13px', top: '-27%', paddingLeft: '16px' }
                    }
                  >
                    Email
                  </label>
                  <FormControl
                    type="email"
                    value={mail}
                    onChange={(event) => setmail(event.target.value)}
                    className="input-custom"
                    style={{
                      paddingTop: !mail ? '0' : '20px',
                      boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
                      border: 'none',
                    }}
                  />
                </div>
                <div className="position-relative">
                  <label
                    style={
                      !name
                        ? { fontSize: '23px', top: '-20%', paddingLeft: '18px' }
                        : { fontSize: '13px', top: '-27%', paddingLeft: '16px' }
                    }
                  >
                    Name
                  </label>
                  <FormControl
                    type="text"
                    value={name}
                    onChange={(event) => setname(event.target.value)}
                    className="input-custom"
                    style={{
                      paddingTop: !name ? '0' : '20px',
                      boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
                      border: 'none',
                    }}
                  />
                </div>
                <div className="position-relative">
                  <label
                    style={
                      !message
                        ? { fontSize: '23px', top: '-7%' }
                        : {
                            fontSize: '13px',
                            top: '-10%',
                            width: '90%',
                            textAlign: 'left',
                            backgroundColor: 'white',
                            borderRadius: '25%',
                            margin: '0 auto',
                            padding: '0',
                            left: '14px',
                          }
                    }
                  >
                    Message
                  </label>
                  <FormControl
                    as="textarea"
                    aria-label="With textarea"
                    rows="5"
                    type="text"
                    value={message}
                    onChange={(event) => setmessage(event.target.value)}
                    style={{
                      marginBottom: '20px',
                      paddingTop: !message ? '8px' : '18px',
                      fontSize: '18px',
                      height: '150px',
                      borderRadius: '25px',
                      boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
                      border: 'none',
                    }}
                  />
                </div>
                {sending ? (
                  <Spinner
                    animation="grow"
                    style={{ color: 'rgb(255, 118, 118)' }}
                  />
                ) : (
                  <button onClick={submit}>Submit</button>
                )}
                <animated.div className="mt-2" style={fade}>
                  Please complete the form.
                </animated.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
