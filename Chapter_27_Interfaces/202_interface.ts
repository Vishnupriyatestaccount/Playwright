interface APIResponse{
    body:string;
    headers?:object;
    responseToime?:number;
}

let response1: APIResponse={
    body:"HI",
}

let response2: APIResponse={
    body:"Hi",
    headers:{},
    responseTime: 400
};