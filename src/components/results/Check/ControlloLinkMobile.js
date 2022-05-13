import React from 'react';
import './../css/cards.css';

export default function MobileLink(props){
  if(props.sitoweb !== null){
  return(
    <div className="links">
      <a className='website' href={props.sitoweb} target="_blank"><span>Vai al sito</span></a>
      <a className='location' href={'https://www.google.com/maps/?q=' + props.latitudine + "," + props.longitudine} target="_blank"><span>Apri su GMaps</span></a>
    </div>
  )
  }
  else{
    return(
      <a className={'location_only'} href={'https://www.google.com/maps/?q=' + props.latitudine + "," + props.longitudine} target="_blank"><span>Apri su GMaps</span></a>
    )
  }
}
