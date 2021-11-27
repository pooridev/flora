import {decrypt, encrypt} from "./encrypt";

export const db = {
    set: (key, value) => localStorage.setItem(key, encrypt(value)),
    del: (key) => localStorage.removeItem(key),
    get: (key) => decrypt(localStorage.getItem(key))
}
