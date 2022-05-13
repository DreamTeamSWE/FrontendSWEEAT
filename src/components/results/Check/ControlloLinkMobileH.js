import React from 'react';

export default function MobileLink(props){
  if(props.sitoweb !== null){
  return(
    <div className="linksHome">
      <a className='websiteHome' href={props.sitoweb} target="_blank"><span>Vai al sito</span></a>
      <a className='locationHome' href={'https://www.google.com/maps/?q=' + props.latitudine + "," + props.longitudine} target="_blank"><span>Apri su GMaps</span></a>
    </div>
  )
  }
  else{
    return(
      <a className={'location_onlyHome'} href={'https://www.google.com/maps/?q=' + props.latitudine + "," + props.longitudine} target="_blank"><span>Apri su GMaps</span></a>
    )
  }
}
