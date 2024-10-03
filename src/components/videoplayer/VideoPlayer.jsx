/* eslint-disable react/prop-types */

import "../videoplayer/videoPlayer.css";
import video from "../../assets/video/college-video.mp4";
import { useRef } from "react";

const VideoPlayer = ({play, setPlay}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlay(false);
        }
    }

  return (
    <>
    <div className={`video_player ${play ? "" : "hide"}`} 
    ref={player}
    onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
    </>
  )
}

export default VideoPlayer;