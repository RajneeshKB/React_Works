import axios from 'axios';

const KEY = "AIzaSyCWUvWGbb3_f-FfF4cMfSOQplpZBWYj-SQ";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});