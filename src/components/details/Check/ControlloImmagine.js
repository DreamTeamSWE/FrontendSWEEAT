import React from "react";

//return html with image
export default function CheckImg(props) {
  if (props.image !== " ") {
    const images = [];

    props.image.map((i, index) => {
      if (images.indexOf(i) === -1) images.push(i);
    });
    //const i = images[0];
    //console.log('images: ', images[0]);
    return <img className="image" alt="immagine post" src={images[0]} />
  }

  /*if(props.image !== " "){
    {props.image.map((img, index) => (
      img.map((i) => {
          return <img className='image' src={i.url_image}/>
      })
    ))}
  }*/
  else{
    return <p />
  }
}
