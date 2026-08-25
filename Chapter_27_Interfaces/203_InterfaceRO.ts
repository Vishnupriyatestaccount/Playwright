interface APIResponseReadonly {
    readonly statuscode: number;
    body: string;
    headers?: object;
    responseTime?: number;
}

let response: APIResponseReadonly = {
    statuscode: 200,
    body: '{"User":"admin"}',
};

console.log("Status", response.statuscode);
console.log("Body", response.body);
console.log("Header", response.headers);

//response.statuscode=400;//read only and reassignment not possible
response.body = 'sdfdwfdw';