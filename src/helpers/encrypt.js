import SimpleCrypto from "simple-crypto-js"
import {Configs} from "../configs";

const Crypto = new SimpleCrypto(Configs.SALT);
export const encrypt = str => {
    try{
        return Crypto.encrypt(str);
    }catch (e) {
        return null
    }
};

export const decrypt = str => {
    try{
        return Crypto.decrypt(str)
    }catch (e) {
        return null
    }
};