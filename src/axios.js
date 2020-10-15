import axios from "axios"

const instance = axios.create({
    baseURL: "https://us-central1-clone-f891c.cloudfunctions.net/api"
    
    // "http://localhost:5001/clone-df1c0/us-central1/api" 

    //the API (cloud functions) url
});

export default instance;
