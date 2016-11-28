import React from 'react'

const MainVideo = (props) => {
  return (
    <div>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.video.url}`} frameborder="0" allowfullscreen></iframe>
    </div>
  )
}

export default MainVideo
