import React from 'react';

class VideoSearch extends React.Component {
  constructor(){
    super()
  this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault()
    this.props.search(event.target.children[1].value)
  }

render(){
  return (
    <div>
      <form onSubmit={this.handleClick} className="search-bar">
        <label>Searchbar</label>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  )}
}
export default VideoSearch
