import axios from 'axios';

const ORDERS_BASE_REST_API_URl = 'http://localhost:9191/orders' ;

class OrderService{
    getAllOrders(){
        return axios.get(ORDERS_BASE_REST_API_URl + "/getAllOrder")
    }
    updateOrder(orderId ,order){
        return axios.patch(ORDERS_BASE_REST_API_URl + "/update/" + orderId,order)
    }
    createOrder(order){
        return axios.post(ORDERS_BASE_REST_API_URl + "/addOrder" , order)
    }
    getOrderByCustomerId(customerId){
        return axios.get(ORDERS_BASE_REST_API_URl + "/getByCustomerId/" + customerId)
    }
}

export default  new OrderService();