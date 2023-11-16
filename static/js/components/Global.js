import React, { useState } from 'react'
import Video from './Global-content/Video'
import Pageloader from './Global-content/Pageloader'
import Rsidemenu from './Global-content/Rsidemenu'
import Scrollnav from './Global-content/Scrollnav'
import Lsb from './Global-content/Lsb'
import Settings from './Global-content/Settings'
import MainWrapper from './MainWrapper'


export default function Global(){
    const [currentVideo,setVideo]=useState('')
    
    function changeVideo(videos){
      setVideo(videos);
    }
    return (
      <div>
        <Video video={currentVideo}/>
      {/* <Pageloader/> */} 

        {/* Settings icon */}
        <Settings clickEvent={changeVideo} />

        {/* Left Side Bar and it will get executed on large devices*/}
        <Lsb/>

        {/*when user interacts with the hamburger menu it display the inner-components*/}
        <Rsidemenu/>

        {/*fixed on large screens easy to navigate through section og main components*/}
        <Scrollnav/>

        {/* heroSection, about, testimoni  */}
        <MainWrapper/>

    </div>
    )
  }