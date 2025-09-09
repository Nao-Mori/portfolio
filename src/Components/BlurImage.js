import React, { useState, useEffect } from 'react';

const loadImage = (src) => {
  new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      resolve();
    };

    image.src = src;
  });
};

var loadedImages = [];

const BlurImage = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.load) {
      let already = false;
      for (let i = 0; i < loadedImages.length; i++) {
        if (loadedImages[i] === props.src) {
          already = true;
          break;
        }
      }
      if (!already) {
        setLoaded(false);
        loadedImages.push(props.src);
        setTimeout(async () => {
          await loadImage(`/images${props.src}`);
          setLoaded(true);
        }, 100);
      } else setLoaded(true);
    }
  }, [props.src, props.load]);

  return (
    <img
      className={props.className}
      alt={props.alt}
      src={loaded ? `/images${props.src}` : `${props.src64}`}
    />
  );
};

export default BlurImage;
