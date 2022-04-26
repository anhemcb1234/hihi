import {Axios} from './Axios';

function getCate(){
    return Axios.get('/categories/get?id_website=4');
}
function getProducts(){
    return Axios.get('products/get?active=1&id_parent=0&id_website=4');
}
function getFilter(name,id,){
    return Axios.post(`/filters/get?active=&${name}=&${id}=&description=&page=1&offset=100&id_website=4
    `);
}
export const useServices = {
    getProducts,
    getCate,
    getFilter
};