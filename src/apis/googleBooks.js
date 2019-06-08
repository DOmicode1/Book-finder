import axios from 'axios';

const KEY = "AIzaSyCT5e0cdw7XZBPvboXdmvWET52bGgrHiLM";

export default axios.create({
    //baseURL: "https://www.googleapis.com/books/v1",
    baseURL: "https://www.googleapis.com/books/v1/volumes?q=search+terms",
    params: {
        //part: 'snippet',
        projection: 'full',
        maxResults: 10,
        key: KEY
    }
});
