import axios from 'axios';

const KEY = 'AIzaSyBVrPWow8eqMAsAi99FHSCq5TZvOoY5UlQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

