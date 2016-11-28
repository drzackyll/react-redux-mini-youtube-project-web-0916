import React from 'react'

class SideVideos extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick(v, event){
    this.props.switchFunction(v)
  }

  render(){
    return (
      <div>
        {this.props.videosList.map(v => { return <img src={`${v.thumbnail}`} onClick={(event) => this.handleClick(v, event)}/>})}
      </div>
    )
  }
}

export default SideVideos
