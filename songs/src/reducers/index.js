import { combineReducers } from 'redux';

const songsReducer = ()=>{
    return [
        { title: 'Breakup with your girlfriend', duration: '4:05' },
        { title: 'Please me', duration: '2:30' },
        { title: 'Who do you love', duration: '3:15' },
        { title: 'Walk me home', duration: '5:45' }
    ];
}

const selectedSongReducer = (selectedSong=null, action)=>{
    if(action.type === 'SONG_SELECTED')
        return action.payload;
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})