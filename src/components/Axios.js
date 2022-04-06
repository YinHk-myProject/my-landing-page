import axios from "axios";

const Axios = url => {
     return async () => { 
        let res = await axios.get(url);
        let { data } = res.data;
    };
}

export default Axios;