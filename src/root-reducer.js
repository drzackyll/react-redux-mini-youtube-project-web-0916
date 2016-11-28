import { combineReducers } from 'redux'

function mainVideo(state = {}, action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      return {url: action.payload.data.items[0].id.videoId, thumbnail: action.payload.data.items[0].snippet.thumbnails.default.url}
    case "SWITCH_VIDEOS":
      return action.payload.thumbObject
    default:
      return state
  }
}

function sideVideos(state = [], action) {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload.data.items.slice(1).map(v => {return {url: v.id.videoId, thumbnail: v.snippet.thumbnails.default.url}})
    case "SWITCH_VIDEOS":
      return state.map(v => {
        if (v === action.payload.thumbObject){
          return action.payload.mainObject
        } else {
          return v
        }
      })
    default:
      return state
  }
}


const rootReducer = combineReducers({mainVideo, sideVideos})

export default rootReducer
