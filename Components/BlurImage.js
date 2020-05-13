import React, { useState, useEffect } from "react";

const loadImageWithPromiseTimeout = src => {
  new Promise((resolve, reject) => {
    const image = new Image();

    const timeout = setTimeout(() => {
      image.onload = null;
      reject();
    }, 3000);

    image.onload = () => {
      clearTimeout(timeout);
      resolve();
    };

    image.src = src;
  })
}

var loadedImages = []

const BlurImage = props => {
    const [loaded, setLoaded] = useState(false)

    const awaitImage = async () => {
        try {
            await loadImageWithPromiseTimeout(`/images${props.src}`)
            setLoaded(true)
        } catch {
            console.error(`Unable to load ${props.src} in 3s`)
        }
    }

    useEffect(()=>{
        let already = false
        for(let i = 0; i < loadedImages.length; i ++) {
            if(loadedImages[i] === props.src) {
                already = true
                break
            }
        }
        if(!already) {
            setLoaded(false)
            loadedImages.push(props.src)
            setTimeout(()=>{
                awaitImage()
            },100)
        } else setLoaded(true)
    },[props.src])

    return (
        <img
        className={props.className}
        alt={props.alt}
        style={props.style}
        src={loaded ? `/images${props.src}` : `${props.src64}`}
        />
    )
}

export default BlurImage