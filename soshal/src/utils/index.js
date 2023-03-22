import { API_URLS , LOCALSTORAGE_TOKEN_KEY } from "./constants";
export * from './constants';

export const setItemInLocalStorage = (value , key) => {
    if(!key || !value){
        return console.error('cannot store in LS');
    }

    const valueToStore = typeof value !== "string" ? JSON.stringify(value) : value;

    localStorage.setItem(key , valueToStore);
}

export const getItemInLocalStorage = (key) => {
    if(!key){
        return console.error('cannot get the value from LS');
    }
    localStorage.getItem(key);
}

export const removeItemInLocalStorage = (key) => {
    if(!key){
        return console.error('cannot remove the value from LS');
    }
    localStorage.removeItem(key);
}

export const getFormBody = (params)  => {
    let formBody = [];
    for(let property in params){
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(params[property]);

        formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
};
 