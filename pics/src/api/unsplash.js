import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 24ivKBhHQzzzQLrRQ926kCHzxAG_lRFudPC2pIg42ww'
    }
});
