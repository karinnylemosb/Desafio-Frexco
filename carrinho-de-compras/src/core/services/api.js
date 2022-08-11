import axios from "axios";

const corsProxy = "https://evening-lake-85504.herokuapp.com/"
const baseUrl = "https://www.fruityvice.com/api/fruit"

//Api com problema, foi necessessário utilizar um endereço externo.
const api = axios.create({
    baseURL: `${corsProxy}${baseUrl}/`,
    headers: { 'content-type': 'application/json' },
});

export default api;