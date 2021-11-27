import {Configs} from "../configs";

export const getAbsolutePath = (relative_path) => Configs.API_URL + '/' + relative_path;
