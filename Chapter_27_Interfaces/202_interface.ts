interface APIResponseBasic {
    body: string;
    headers?: object;
    responseTime?: number;
}

let response1: APIResponseBasic = {
    body: "HI",
};

let response2: APIResponseBasic = {
    body: "Hi",
    headers: {},
    responseTime: 400,
};