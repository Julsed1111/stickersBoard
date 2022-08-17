import api from "../api/api";
import { API_URL } from "../constants";

export function getStickerById(id){
     return api.get(API_URL + "/" + id).then((resp) => resp);
}

export function getStickersList(){
     return api.get().then((resp) => resp.data);
}

export function createNewSticker(text){
     return api.post('', text).then((resp) => resp.data );
}

export function deleteSticker(id){
     return api.delete(API_URL + "/" + id).then((resp) => resp.data);
}

export function updateSticker(id, item){
     return api.put(API_URL + "/" + id, item).then((resp) => resp.data); 
}