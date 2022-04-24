import axios from 'axios';

const ORDERS_BASE_REST_API_URl = 'http://localhost:9191/users' ;

class UserService{
     getToken(data){
         return axios.post('http://localhost:9191/token',data);
     }
}

export default  new UserService();