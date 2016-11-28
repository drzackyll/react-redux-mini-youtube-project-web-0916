import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import './App.css';
import VideoSearch from './VideoSearch'
import {fetchVideos} from './actions'
import {switchVideos} from './actions'
import rootReducer from './root-reducer'
import MainVideo from './MainVideo'
import SideVideos from './SideVideos'

class App extends Component {
  constructor(){
    super()
    this.search = this.search.bind(this)
    this.switchFunction = this.switchFunction.bind(this)
  }

  render() {
    return (
      <div className="App">
        <VideoSearch search={this.search}/>
        <MainVideo video={this.props.mainVideo}/>
        <SideVideos videosList={this.props.sideVideos} switchFunction={this.switchFunction}/>
      </div>
    );
  }

  switchFunction(thumbObject){
    debugger
    this.props.switchVideos(thumbObject, this.props.mainVideo)
  }

  search(term){
    this.props.fetchVideos(term)
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchVideos: fetchVideos, switchVideos: switchVideos}, dispatch)
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
