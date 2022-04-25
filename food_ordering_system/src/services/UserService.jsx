import axios from 'axios';

const ORDERS_BASE_REST_API_URl = 'http://localhost:9191/users' ;

class UserService{
     getToken(data){
         return axios.post('http://localhost:9191/token',data);
     }
     loadUserByUsername(userName){
         return axios.get('http://localhost:9191/users/getUser/'+userName);
     }
     signUpUser(data){
        return axios.post(ORDERS_BASE_REST_API_URl+'/signUp' , data)
    }
}

export default  new UserService();