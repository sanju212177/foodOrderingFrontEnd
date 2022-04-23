import axios from "axios";

const ITEM_BASE_REST_API_URl = 'http://localhost:9191/items' ;
class ItemService{

    getAllFoodItems(){
        return axios.get(ITEM_BASE_REST_API_URl+"/getAllItems");
    }
    updateQuantity(intemId , Item){
        return axios.patch(ITEM_BASE_REST_API_URl+'/updateQuantity/'+intemId ,Item)
    }
    addItem(item){
        return axios.post(ITEM_BASE_REST_API_URl+'/addItem',item);
    }
    deleteFoodItem(id){
        return axios.delete(ITEM_BASE_REST_API_URl+'/deleteFoodItem/'+id);
    }
    getQuantity(id){
        return axios.get(ITEM_BASE_REST_API_URl+"/getQuantity/"+id);
    }
}

export default new ItemService();

