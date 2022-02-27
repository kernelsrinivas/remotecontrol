export interface Action {
    type: string;
    payload?: {} | [] | string | number | boolean;
    meta?: {} | [] | string | number | boolean;
    error?: boolean | number;
}